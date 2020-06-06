'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class EstimatesNewPartsRepository extends Repository {
	constructor({ DB, EstimatesNewPartsDto, Config }) {
		super(DB, EstimatesNewPartsDto, Config, 'estimates_new_parts')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = EstimatesNewPartsRepository
