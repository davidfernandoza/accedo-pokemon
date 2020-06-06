'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class BasePartsRepository extends Repository {
	constructor({ DB, BasePartsDto, Config }) {
		super(DB, BasePartsDto, Config, 'base_parts')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = BasePartsRepository
