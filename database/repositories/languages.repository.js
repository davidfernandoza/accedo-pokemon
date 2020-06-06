'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class LanguagesRepository extends Repository {
	constructor({ DB, LanguagesDto, Config }) {
		super(DB, LanguagesDto, Config, 'languages')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = LanguagesRepository
