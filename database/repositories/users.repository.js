'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class UsersRepository extends Repository {
	#encryptionHelper = {}

	constructor({ DB, UsersDto, Config, EncryptionHelper }) {
		super(DB, UsersDto, Config, 'users')
		this.db = DB
		this.#encryptionHelper = EncryptionHelper
	}

	async create(options, addSubDto, transaction) {
		options.data.password = await this.#encryptionHelper.encryption(
			options.data.password
		)
		return await super.create(options, addSubDto, transaction)
	}

	// --------------------------------------------------------------------

	async changePassword(id, password, transaction) {
		password = await this.#encryptionHelper.encryption(password)
		return await super.update(
			{
				id,
				dto: { password: 'password' },
				data: {
					password
				}
			},
			null,
			transaction
		)
	}
}
module.exports = UsersRepository
