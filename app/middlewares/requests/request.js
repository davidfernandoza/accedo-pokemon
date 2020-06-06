'use strict'
class Request {
	constructor(SchemaBody, JoiValidator, CSRF, JWTService) {
		this.codeError = 'ERR400'
		this.package = 'joi'
		this.csrfToken = CSRF
		this.joiValidator = JoiValidator
		this.schemaBody = SchemaBody
		this.JWTService = JWTService
		this.schemaAuth = {
			http_auth_token: JoiValidator.string().min(80).max(225).required()
		}
		this.schemaCsrf = {
			http_csrf_token: JoiValidator.any().valid(this.csrfToken).required()
		}
	}

	// ---------------------------------------------------------------------------
	// Metodo estandar para validaciones privadas
	async body(req, res, next) {
		if (req.method != 'GET' && req.method != 'DELETE') {
			const body = await this.bodyValidator(req, this.schemaBody)
			if (body != true) await this.errorHandle(body)
		}
		next()
	}

	// ---------------------------------------------------------------------------
	// Metodo estandar para validaciones publicas.
	async public(req, res, next) {
		const header = await this.headersValidator(req, 'csrf')
		if (header != true) await this.errorHandle(header)
		next()
	}

	// ---------------------------------------------------------------------------
	// Metodo estandar para validaciones publicas.
	async private(req, res, next) {
		const header = await this.headersValidator(req)
		if (header != true) await this.errorHandle(header)
		next()
	}

	// Validaciones
	// ---------------------------------------------------------------------------

	// Validacion de cabecera
	async headersValidator(req, type) {
		try {
			let rules = {}
			if (!type) {
				rules = {
					http_csrf_token: this.schemaCsrf.http_csrf_token,
					http_auth_token: this.schemaAuth.http_auth_token
				}
			} else {
				if (type == 'auth') {
					rules = this.schemaAuth
				}

				// Validacion de token en webhook o web
				if (type == 'web') {
					const responseToken = await this.JWTService.decode(
						req.csrfToken,
						'token'
					)
					if (responseToken.status == 200) {
						if (responseToken.payload.token === this.csrfToken) return true
					}
					return false
				} else {
					rules = this.schemaCsrf
				}
			}
			const schema = this.joiValidator.object(rules).unknown(true)
			await schema.validateAsync(req.headers, { abortEarly: false })
			return true
		} catch (error) {
			return error
		}
	}

	// ---------------------------------------------------------------------------
	// Validacion de cuerpo
	async bodyValidator(req, rules) {
		try {
			const schema = this.joiValidator.object(rules).unknown(true)
			await schema.validateAsync(req.body, { abortEarly: false })
			return true
		} catch (error) {
			return error
		}
	}

	// ---------------------------------------------------------------------------
	async errorHandle(error, body) {
		const objecError = {}
		if (body) {
			objecError.errors = [body]
		} else {
			objecError.errors = error.details.map(item => {
				let message = item.message.replace(/"/g, '')
				let path = item.path[0].replace(/http_auth_token/g, 'Auth')
				path = path.replace(/http_csrf_token/g, 'Token')
				message = message.replace(/http_auth_token/g, 'Auth')
				message = message.replace(/http_csrf_token/g, 'Token')
				message = message.replace(/\[/g, '')
				message = message.replace(/\]/g, '')
				message = message.replace(new RegExp(this.csrfToken, 'g'), 'Correct')

				return {
					message: message,
					path: path
				}
			})
		}
		objecError.status = this.codeError
		objecError.package = this.package
		throw new Error(JSON.stringify(objecError))
	}
}
module.exports = Request
