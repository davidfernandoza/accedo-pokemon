'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ReusablePartsRepository extends Repository {
	constructor({ DB, ReusablePartsDto, Config }) {
		super(DB, ReusablePartsDto, Config, 'reusable_parts')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = ReusablePartsRepository
