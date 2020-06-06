'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))
const moment = require('moment')

class ForgotPasswordController extends Controller {
	#usersController = {}
	#sequelize = {}
	#JWTService = {}
	#forgotPasswordRepository = {}
	#mailService = {}
	#smsString = {}
	#smsService = {}

	constructor({
		ForgotPasswordRepository,
		ForgotPasswordDto,
		UsersController,
		MailService,
		DoneString,
		SmsService,
		JWTService,
		SmsString,
		Config,
		DB
	}) {
		super(ForgotPasswordRepository, ForgotPasswordDto, Config, DoneString)
		this.#usersController = UsersController
		this.#JWTService = JWTService
		this.#forgotPasswordRepository = ForgotPasswordRepository
		this.#smsService = SmsService
		this.#mailService = MailService
		this.#smsString = SmsString

		// paquete para transacciones en sequelize
		this.#sequelize = DB.sequelize
	}

	// --------------------------------------------------------------------

	// Renderizado de vista que carga el formulario
	async index(req, res) {
		const recoverPassword = await super.getByAttribute({
			attribute: 'token',
			value: req.params.token,
			type: 'one',
			return: true,
			res: res
		})

		// Existencia de token de recuperacion
		if (!recoverPassword) throw new Error('403')
		else {
			/*
			 * CSRF token para la vista de recuperacion
			 */
			const cretedCsrfToken = await this.#JWTService.create(
				recoverPassword.id,
				null,
				null,
				this.config.CSRF_TOKEN
			)
			const objecWeb = {
				page: 'recover-password',
				title: 'Recuperar Contraseña',
				csrfToken: cretedCsrfToken.payload.token
			}
			// Renderizar vista
			return await super.response(res, objecWeb, 'OK')
		}
	}

	// --------------------------------------------------------------------

	// Creacion de requerimiento de cambio de contraseña
	async create(req, res) {
		const user = await this.getForType(req, res) // Obtiene el metodo de envio (EMAIL, SMS)
		if (!user) throw new Error('ERR404')

		/*
		 * Token de recuperacion
		 */
		const cretedToken = await this.#JWTService.create(
			user.id,
			null,
			null,
			this.config.CSRF_TOKEN
		)

		// Cuerpo de un registro para la tabla ForgotPassword
		req.body = {
			users_id: user.id,
			token: cretedToken.payload.token,
			expiration: moment()
				.add(parseInt(this.config.TOKEN_TIME_MINUTES), 'minutes')
				.toISOString()
		}
		req.return = true

		// Elimina algun registro viejo
		await super.delete(
			{ options: { query: { where: { users_id: user.id } } }, return: true },
			res
		)

		// Crea el nuevo registro y lo manda por SMS o EMAIL
		await super.create(req, res)
		const send = await this[user.sendType](cretedToken.payload.token, user)

		if (!send) throw new Error('ERR404')
		return await super.response(res, {}, 'DON204')
	}

	//  -------------------------------------------------------------

	// Metodo que crea la contraseña - WEB
	async recoverPassword(req, res) {
		const { token } = req.params,
			responseToken = await this.#JWTService.decode(token)

		// validacion de token
		if (responseToken.status != 200) throw new Error('403')
		if (responseToken.payload.token != this.config.CSRF_TOKEN)
			throw new Error('403')
		try {
			/*
			 * Cambio de password usuando el controlador del usuario
			 */
			req.id = responseToken.payload.id // id de usuario
			req.transaction = await this.#sequelize.transaction()
			await this.#usersController.changePassword(req)

			// Eliminacion de token para el cambio del password
			const deleted = await this.#forgotPasswordRepository.deleteByToken(
				token,
				req.transaction
			)

			// Commitiar los cambios
			if (!deleted) throw new Error('403')
			await req.transaction.commit()
			const objecWeb = {
				page: '200',
				title: 'Contraseña Cambiada',
				message: 'Contraseña Cambiada'
			}

			// Renderizar mensaje en vista
			return await super.response(res, objecWeb, 'OK')
		} catch (error) {
			await req.transaction.rollback()
			if (error.message == '403') {
				throw new Error('403')
			} else {
				throw new Error('500')
			}
		}
	}

	//  ------------------------------------------------------------

	async getForType(req, res) {
		let user = null,
			options = {
				return: true,
				type: 'one',
				res: res
			}

		// tipo de envio de mensaje
		switch (req.path) {
			case '/email': {
				options.attribute = 'email'
				options.value = req.body.email
				user = await this.#usersController.getByAttribute(options)
				if (user) user.sendType = 'sendEmail'
				break
			}
			default: {
				options.attribute = 'phone'
				options.value = req.body.phone
				user = await this.#usersController.getByAttribute(options)
				if (user) user.sendType = 'sendSms'
				break
			}
		}
		return user
	}

	// ----------------------------------------------------------------

	async sendEmail(token, user) {
		const optionMail = {
			from: `${this.app} Server <${this.config.MAIL.EMAIL}>`,
			to: user.email,
			subject: `${this.app} - ¿Olvidaste tu contraseña?`,
			template: 'forgot-password-email',
			context: {
				url: `${this.config.BASE_URL}/recover-password/${token}`,
				app: this.app,
				appUp: this.app
			}
		}

		return await this.#mailService.send(optionMail)
	}

	//  ------------------------------------------------------------

	async sendSms(token, user) {
		let message = this.#smsString.MSG01.message.replace(/#1/g, this.app),
			phone = user.phone.replace(/-/g, '')

		message = message.replace(
			/#2/g,
			`${this.config.DOMAIN}/recover-password/${token}`
		)

		const optionSms = {
			to: phone,
			body: message
		}

		return await this.#smsService.send(optionSms)
	}
}

module.exports = ForgotPasswordController
