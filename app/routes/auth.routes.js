'use strict'

const { Router } = require('express')

module.exports = ({ AuthMiddleware, AuthRequest, TokenAuth, UsersAuth }) => {
	/*
	 * Request:
	 */
	const reqPublic = AuthRequest.public.bind(AuthRequest)
	const reqPrivate = AuthRequest.private.bind(AuthRequest)
	const reqBody = AuthRequest.body.bind(AuthRequest)

	/*
	 * Middlewares:
	 */
	const auth = AuthMiddleware.compare.bind(AuthMiddleware)

	/*
	 * Controllers:
	 */
	const user = UsersAuth
	const token = TokenAuth
	const router = Router()

	router.post('/login', reqPublic, reqBody, user.login.bind(user))
	router.post('/new-token', reqPrivate, auth, token.create.bind(token))

	return router
}
