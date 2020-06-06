'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PhasesRepository extends Repository {
	constructor({ DB, PhasesDto, Config }) {
		super(DB, PhasesDto, Config, 'phases')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = PhasesRepository
