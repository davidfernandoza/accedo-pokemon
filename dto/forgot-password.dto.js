'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ForgotPasswordDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			users_id: 'users_id',
			token: 'token',
			expiration: 'expiration'
		}
		super(schema)
	}
}

module.exports = ForgotPasswordDto
