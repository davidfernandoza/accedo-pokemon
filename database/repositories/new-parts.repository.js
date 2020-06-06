'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class NewPartsRepository extends Repository {
	constructor({ DB, NewPartsDto, Config }) {
		super(DB, NewPartsDto, Config, 'new_parts')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = NewPartsRepository
