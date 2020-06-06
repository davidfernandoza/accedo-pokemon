'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class OrganizationsRepository extends Repository {
	constructor({ DB, OrganizationsDto, Config }) {
		super(DB, OrganizationsDto, Config, 'organizations')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = OrganizationsRepository
