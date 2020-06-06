'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class TokenBlackListDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			token: 'token',
			created_at: 'created_at'
		}
		super(schema)
	}

	async api(addSubDto) {
		const schema = await super.api(addSubDto)
		delete schema.token
		schema.auth_token = 'token'
		return schema
	}
}

module.exports = TokenBlackListDto
