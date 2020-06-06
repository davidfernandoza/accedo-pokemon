'use strict'
const { join } = require('path')
const { DB } = require(join(__dirname, '../../config/env'))

module.exports = {
	username: DB.username,
	password: DB.password,
	database: DB.database,
	host: DB.host,
	dialect: DB.dialect,
	loggin: DB.loggin
}
