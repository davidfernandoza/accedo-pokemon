'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class TypesSizesRepository extends Repository {
	constructor({ DB, TypesSizesDto, Config }) {
		super(DB, TypesSizesDto, Config, 'types_sizes')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = TypesSizesRepository
