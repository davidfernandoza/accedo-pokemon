'use strict'
require('dotenv').config()
const { join } = require('path')

const { NODE_ENV } = process.env
const PRODUCTION = require(join(__dirname, './production'))
const DEVELOPMENT = require(join(__dirname, './development'))
const TEST = require(join(__dirname, './test'))

let currentEnv = DEVELOPMENT

if (NODE_ENV === 'production') {
	currentEnv = PRODUCTION
} else if (NODE_ENV === 'test') {
	currentEnv = TEST
}

module.exports = currentEnv
