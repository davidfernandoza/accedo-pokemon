'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))
let body = {}
let passwordRule = {}
let projectRule = {}

class UsersRequest extends Request {
	constructor({ JoiValidator, Config, JWTService }) {
		body = {
			id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow('', 'null', null)
				.optional(),
			organizations_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.allow(null)
				.optional(),
			first_name: JoiValidator.string().min(1).max(225).required(),
			last_name: JoiValidator.string().min(1).max(225).required(),
			email: JoiValidator.string()
				.email({ ignoreLength: true })
				.min(8)
				.max(100)
				.required(),
			phone: JoiValidator.string().min(1).max(15).required(),
			password: JoiValidator.string().min(1).max(60).required(),
			rol: JoiValidator.any().valid('ADMIN', 'DEV').required()
		}

		// Reglas para el cambio de pasword
		passwordRule = {
			password: JoiValidator.string().min(8).max(60).required(),
			confirmPassword: JoiValidator.any()
				.valid(JoiValidator.ref('password'))
				.required()
		}

		// Reglas para el procesamiento de proyecto
		projectRule = {
			users_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required(),
			projects_id: JoiValidator.number()
				.integer()
				.min(0)
				.max(99999999990)
				.required()
		}

		super(body, JoiValidator, Config.CSRF_TOKEN, JWTService)
	}

	// -----------------------------------------------------------------------
	async bodyUpdate(req, res, next) {
		delete body.password
		if (req.method == 'PUT') {
			if (req.rol == 'DEV') req.body.rol = 'DEV'
			const bodyRes = await super.bodyValidator(req, body)
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	// -----------------------------------------------------------------------
	async bodyPassword(req, res, next) {
		if (req.method != 'GET' && req.method != 'DELETE') {
			const bodyRes = await super.bodyValidator(req, passwordRule) // validacion de cuerpo
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	// -----------------------------------------------------------------------
	async bodyIncludeToProject(req, res, next) {
		if (req.method == 'POST' || req.method == 'DELETE') {
			const bodyRes = await super.bodyValidator(req, projectRule) // validacion de cuerpo
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}
}
module.exports = UsersRequest
