'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ExperiencesLanguagesRepository extends Repository {
	constructor({ DB, ExperiencesLanguagesDto, Config }) {
		super(DB, ExperiencesLanguagesDto, Config, 'experiences_languages')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = ExperiencesLanguagesRepository
