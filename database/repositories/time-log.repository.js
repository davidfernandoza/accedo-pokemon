'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class TimeLogRepository extends Repository {
	constructor({ DB, TimeLogDto, Config }) {
		super(DB, TimeLogDto, Config, 'time_log')
		this.db = DB
	}

}
module.exports = TimeLogRepository
