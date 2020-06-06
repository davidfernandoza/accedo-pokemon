'use strict'

const { Router } = require('express')

module.exports = ({
	ForgotPasswordController,
	AuthMiddleware,
	AuthRequest,
	TokenAuth,
	UsersAuth
}) => {
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
	const forgotPassword = ForgotPasswordController
	const user = UsersAuth
	const token = TokenAuth
	const router = Router()

	router.post('/login', reqPublic, reqBody, user.login.bind(user))
	router.post('/logout', reqPrivate, auth, token.delete.bind(token))
	router.post('/new-token', reqPrivate, auth, token.create.bind(token))
	router.post(
		'/forgot-password',
		reqPublic,
		reqBody,
		forgotPassword.create.bind(forgotPassword)
	)

	return router
}
