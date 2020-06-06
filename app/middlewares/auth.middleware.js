'use strict'

class AuthMiddleware {
	constructor({ JWTService, TokenBlackListRepository, UsersRepository }) {
		this.JWTServices = JWTService
		this.tokenBlackListRepository = TokenBlackListRepository
		this.usersRepository = UsersRepository
	}

	async compare(req, res, next) {
		if (!req.headers.http_auth_token) throw new Error('ERR401')

		const authToken = req.headers.http_auth_token

		// Consultar lista negra de tokens
		const invalid_token = await this.tokenBlackListRepository.get(authToken)

		if (invalid_token != null) throw new Error('ERR401')
		else {
			let responseToken = ''
			if (req.route.path == '/new-token') {
				// Token sin firma.
				responseToken = await this.JWTServices.decode(authToken, 'auth', true)
			} else {
				responseToken = await this.JWTServices.decode(authToken, 'auth')
			}
			if (responseToken.status === 401 || responseToken.status === 403) {
				throw new Error('ERR401')
			} else {
				/*
				 * Validar si el usuario existe
				 */

				//  Validar si el token tiene la organizacion en null
				if (!responseToken.payload.organization) throw new Error('ERR401')

				const user = await this.usersRepository.get({
					id: responseToken.payload.id
				})

				// Validar si el usuario existe y no este despedido
				if (!user) throw new Error('ERR401')
				if (!user.organizations_id) throw new Error('ERR401')

				req.id = responseToken.payload.id
				req.rol = responseToken.payload.rol
				req.organization = responseToken.payload.organization
				next()
			}
		}
	}
}

module.exports = AuthMiddleware
