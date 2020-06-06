'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { Op } = require('sequelize')

class TokenBlackListRepository extends Repository {
	constructor({ DB, TokenBlackListDto, Config }) {
		super(DB, TokenBlackListDto, Config, 'token_black_list')
		this.db = DB
	}

	async get(token) {
		return await super.get({
			query: {
				where: { token }
			}
		})
	}

	async delete(date) {
		await super.delete({
			query: {
				where: { created_at: { [Op.lte]: date } }
			}
		})
	}
}
module.exports = TokenBlackListRepository
