'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))
let body = {}
let passwordRule = {}


class UsersRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		body = {
			first_name: JoiValidator.string().min(1).max(225).required(),
			last_name: JoiValidator.string().min(1).max(225).required(),
			email: JoiValidator.string()
				.email({ ignoreLength: true })
				.min(8)
				.max(100)
				.required(),
			password: JoiValidator.string().min(1).max(60).required()
		}

		// Reglas para el cambio de pasword
		passwordRule = {
			password: JoiValidator.string().min(8).max(60).required(),
			confirmPassword: JoiValidator.any()
				.valid(JoiValidator.ref('password'))
				.required()
		}
		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}

	// -----------------------------------------------------------------------
	async bodyPassword(req, res, next) {
		if (req.method != 'GET' && req.method != 'DELETE') {
			const bodyRes = await super.bodyValidator(req, passwordRule) // validacion de cuerpo
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}
}
module.exports = UsersRequest
