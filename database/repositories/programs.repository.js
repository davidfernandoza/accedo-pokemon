'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
// morphism(dto, entity)

class ProgramsRepository extends Repository {
	constructor({ DB, ProgramsDto, Config }) {
		super(DB, ProgramsDto, Config, 'programs')
		this.db = DB
	}
}
module.exports = ProgramsRepository
