'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class StandardDefectsRepository extends Repository {
	constructor({ DB, StandardDefectsDto, Config }) {
		super(DB, StandardDefectsDto, Config, 'standard_defects')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = StandardDefectsRepository
