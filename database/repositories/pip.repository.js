'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class PipRepository extends Repository {
	constructor({ DB, PipDto, Config }) {
		super(DB, PipDto, Config, 'pip')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = PipRepository
