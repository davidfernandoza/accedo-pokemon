'use strict'
const { join } = require('path')
const Auth = require(join(__dirname, './auth'))

class UsersAuth extends Auth {
	constructor({
		UsersController,
		UsersDto,
		JWTService,
		DoneString,
		EncryptionHelper
	}) {
		const dataUser = {
			attribute: 'email' //username -> con este atributo busca en base de datos
		}
		super(
			UsersController,
			EncryptionHelper,
			UsersDto,
			JWTService,
			dataUser,
			DoneString
		)
	}
}

module.exports = UsersAuth
