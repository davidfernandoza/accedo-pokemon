'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class TestReportsRepository extends Repository {
	constructor({ DB, TestReportsDto, Config }) {
		super(DB, TestReportsDto, Config, 'test_reports')
		this.db = DB
	}
	// Aqui van las consultas especializadas
}
module.exports = TestReportsRepository
