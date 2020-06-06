'use strict'
const jwt = require('jwt-simple')
const moment = require('moment')

class JWTService {
	#config = {}

	constructor({ Config }) {
		this.#config = Config
	}

	//  Metodo para crear el token
	async create(id, rol, organization, secureToken) {
		let payload

		if (!id) return { status: 403, payload: null }
		// Para la seguridad de WebHooks o de recuperacion de contraseñas
		else if (secureToken) {
			payload = {
				sub: id,
				token: secureToken,
				iat: moment().unix(),
				exp: moment()
					.add(parseInt(this.#config.TOKEN_TIME_MINUTES), 'minutes')
					.unix()
			}
		}
		// seguridad de usuario
		else {
			if (!rol) return { status: 403, payload: null }
			payload = {
				sub: id,
				rol: rol,
				organization: organization,
				iat: moment().unix(),
				exp: moment().add(7, 'days').unix()
			}
		}
		const token = jwt.encode(payload, this.#config.ENCRYPTION_KEY_TOKEN)
		return { status: 200, payload: { token: token } }
	}

	// Metodo que decodifica el token:
	decode(token, type, status) {
		try {
			/*
			 * status true -> no verifica la firma del token
			 * status false -> si verifica la firma del token
			 */
			status = !status ? false : true
			const payload = jwt.decode(
				token,
				this.#config.ENCRYPTION_KEY_TOKEN,
				status
			)

			type = !type ? 'auth' : type

			let data = {}
			if (type == 'auth') {
				data = {
					id: payload.sub,
					rol: payload.rol,
					organization: payload.organization
				}
			} else {
				data = {
					id: payload.sub,
					token: payload.sub
				}
			}

			data.token = !payload.token ? null : payload.token
			return { status: 200, payload: data }
		} catch (err) {
			if (err.message == 'token expired') {
				return { status: 401, payload: null }
			}
			return { status: 403, payload: null }
		}
	}
}

module.exports = JWTService
