'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))
let passwordRule = {}
let body = {}
let phoneRules = {}
class ForgotPasswordRequest extends Request {
	#errorString = {}

	constructor({ JoiValidator, Config, JWTService, ErrorString }) {
		body = {
			email: JoiValidator.string()
				.email({ ignoreLength: true })
				.min(8)
				.max(100)
				.required()
		}

		phoneRules = {
			phone: JoiValidator.string().min(6).max(15).required()
		}

		passwordRule = {
			password: JoiValidator.string().min(8).max(60).required(),
			confirmPassword: JoiValidator.any()
				.valid(JoiValidator.ref('password'))
				.required(),
			csrfToken: JoiValidator.string().min(40).max(255).required()
		}

		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
		this.#errorString = ErrorString
	}

	//  ----------------------------------------------------------------------

	async phone(req, res, next) {
		const header = await super.headersValidator(req, 'csrf')
		if (header != true) await super.errorHandle(header)
		if (req.method == 'POST') {
			const bodyRes = await super.bodyValidator(req, phoneRules)
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	// -------------------------------------------------------------------------

	//  Validacion WEB
	async password(req, res, next) {
		if (req.method == 'POST') {
			const bodyRes = await super.bodyValidator(req, passwordRule) // validacion de cuerpo
			if (bodyRes != true)
				return res.render('recover-password', {
					page: 'recover-password',
					title: 'Recuperar Contraseña',
					token: req.body.csrfToken,
					messageError: this.#errorString.ERR400.message
				})

			// Validacion CSRF WEB
			req.csrfToken = req.body.csrfToken
			const validate = await super.headersValidator(req, 'web')
			if (validate) return next()
		}
		throw new Error('403')
	}
}
module.exports = ForgotPasswordRequest
