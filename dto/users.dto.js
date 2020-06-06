'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class UsersDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			organizations_id: 'organizations_id',
			first_name: 'first_name',
			last_name: 'last_name',
			email: 'email',
			phone: 'phone',
			rol: 'rol'
		}
		super(schema)
	}

	// Para el auth
	async api(addSubDto) {
		const schema = await super.api(addSubDto)
		schema.auth_token = 'token'
		delete schema.password
		return schema
	}

	async repository(addSubDto) {
		this.schema.password = 'password'
		return super.repository(addSubDto)
	}
}

module.exports = UsersDto
