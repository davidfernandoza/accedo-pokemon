'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const moment = require('moment')
const { Op } = require('sequelize')

class ForgotPasswordRepository extends Repository {
	constructor({ DB, ForgotPasswordDto, Config }) {
		super(DB, ForgotPasswordDto, Config, 'forgot_password')
		this.db = DB
	}

	async deleteByToken(token, transaction) {
		const date = moment().toISOString()
		return await super.delete({
			query: {
				where: {
					[Op.or]: [{ token }, { expiration: { [Op.lt]: date } }]
				},
				transaction: transaction
			}
		})
	}

	async get(options, addSubDto, transaction) {
		const date = moment().toISOString()
		return await super.get(
			{
				query: {
					where: {
						[Op.and]: [options.query, { expiration: { [Op.gte]: date } }]
					},
					transaction: transaction
				}
			},
			addSubDto
		)
	}
}
module.exports = ForgotPasswordRepository
