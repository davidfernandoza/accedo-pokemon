'use strict'
const { Router } = require('express')

/*
 * Rutas de los Users:
 */

module.exports = ({ UsersController, AuthMiddleware, UsersRequest }) => {
	const router = Router()

	/*
	 * Request (Validadores):
	 */
	const reqPrivate = UsersRequest.private.bind(UsersRequest)
	const reqBody = UsersRequest.body.bind(UsersRequest)
	const reqPassword = UsersRequest.bodyPassword.bind(UsersRequest)
	const reqPublic = UsersRequest.public.bind(UsersRequest)

	/*
	 * Middlewares:
	 */
	const auth = AuthMiddleware.compare.bind(AuthMiddleware)

	/*
	 * Controller:
	 */
	const controller = UsersController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get('/', reqPrivate, auth, controller.get.bind(controller))

	/*
	 * -----------------------------------------------------------------------------------*
	 * POST:
	 */
	router.post(
		'/register',
		reqPublic,
		reqBody,
		controller.create.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PATCH:
	 */
	router.patch(
		'/password',
		reqPrivate,
		auth,
		reqPassword,
		controller.changePassword.bind(controller)
	)

	return router
}
