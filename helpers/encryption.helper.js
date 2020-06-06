'use strict'
const bcrypt = require('bcrypt')

class EncryptionHelper {
	#config = {}
	#round = 0
	#salt = ''

	constructor({ Config }) {
		this.#config = Config
	}

	async encryption(string) {
		this.#round = parseInt(this.#config.ENCRYPTION_SALT)
		this.#salt = await bcrypt.genSalt(this.#round)
		return await bcrypt.hash(string, this.#salt)
	}

	async decryption(string, hash) {
		return await bcrypt.compare(string, hash)
	}
}
module.exports = EncryptionHelper

// --------------------------------------------------------------
