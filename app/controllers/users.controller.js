'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class UsersController extends Controller {
	#data = {}
	#usersAuth = {}

	constructor({ UsersRepository, UsersDto, Config, DoneString, UsersAuth }) {
		super(UsersRepository, UsersDto, Config, DoneString)
		this.#usersAuth = UsersAuth
	}

	// --------------------------------------------------------------------------
	async create(req, res) {
		let user = {},
			password = req.body.password
		req.return = true
		user = await super.create(req, res)
		user.token = await this.#usersAuth.login({
			body: {
				identity: user.email,
				password: password
			},
			return: true
		})
		return await this.response(res, user, 'DON201')
	}

	// --------------------------------------------------------------------------
	async get(req, res) {
		req.params.id = req.id
		
		return await super.get(req, res)
	}

	// --------------------------------------------------------------------------
	async changePassword(req, res) {
		this.#data = await this.entityRepository.changePassword(
			req.id,
			req.body.password,
			req.transaction
		)
		if (req.transaction) return this.#data
		await this.response(res, this.#data, 'DON204')
	}
}

module.exports = UsersController
