'use strict'
const { join } = require('path')
const moment = require('moment')
const Controller = require(join(__dirname, '../controller'))

/*
 * Cotrolador que genera un token de autentificación nuevo.
 * Crea un token en la lista negra con el antiguo token
 */
class TokenAuth extends Controller {
	constructor({
		TokenBlackListRepository,
		TokenBlackListDto,
		DoneString,
		JWTService,
		Config
	}) {
		super(TokenBlackListRepository, TokenBlackListDto, Config, DoneString)
		this.JWTServices = JWTService
		this.tokenBlackListRepository = TokenBlackListRepository
	}

	// Nuevo token ---------------------------------------------------------------+

	async create(req, res) {
		const { id, rol, organization } = req
		const { http_auth_token } = req.headers
		const newToken = await this.JWTServices.create(id, rol, organization)
		if (newToken.status === 200) {
			if (await this.addBlackList(http_auth_token)) {
				return await super.response(res, newToken.payload, 'DON200')
			}
		}
		await super.response(res, null, 'DON404')
	}

	// Eliminar token (logout) ----------------------------------------------------+

	async delete(req, res) {
		const { http_auth_token } = req.headers
		const token = await this.JWTServices.decode(http_auth_token)
		if (token.status === 200) {
			if (await this.addBlackList(http_auth_token)) {
				return await super.response(res, {}, 'DON204')
			}
		}
		return await super.response(res, null, 'DON404')
	}

	// Crear token viejo en lista negra --------------------------------------------+

	async addBlackList(token) {
		const created = await this.tokenBlackListRepository.create({
			data: { token: token }
		})

		// Eliminar tokenes caducados
		await this.tokenBlackListRepository.delete(
			moment().subtract(7, 'days').toISOString()
		)

		if (created) {
			return true
		}
		return false
	}
}

module.exports = TokenAuth
