'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class UsersController extends Controller {
	#data = {}
	constructor({ UsersRepository, UsersDto, Config, DoneString }) {
		super(UsersRepository, UsersDto, Config, DoneString)
	}

	// --------------------------------------------------------------------------
	async create(req, res) {
		req.body.organizations_id = req.organization
		return super.create(req, res)
	}

	// --------------------------------------------------------------------------
	async update(req, res) {
		req.body.organizations_id =
			!req.body.organizations_id || req.body.organizations_id == ''
				? null
				: req.body.organizations_id
		delete req.body.password
		return super.update(req, res)
	}

	// --------------------------------------------------------------------------
	async getAllByOrganization(req, res) {
		await super.getByAttribute({
			attribute: 'organizations_id',
			value: req.route.path == '/free' ? null : req.organization,
			type: 'all',
			res: res
		})
	}

	// --------------------------------------------------------------------------
	async getAllByProject(req, res) {
		this.#data = await this.entityRepository.getByInclude({
			includeEntity: 'projects',
			includeAlias: 'projects',
			includeRequired: true,
			includeWhere: { id: req.params.id },
			type: 'all'
		})
		return await this.response(res, this.#data, 'DON200L')
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
