'use strict'
const { Router } = require('express')

/*
 * Rutas de los ForgotPassword:
 */

module.exports = ({ ForgotPasswordController, ForgotPasswordRequest }) => {
	const router = Router()

	/*
	 * Request:
	 */
	const reqPublic = ForgotPasswordRequest.public.bind(ForgotPasswordRequest)
	const reqPhone = ForgotPasswordRequest.phone.bind(ForgotPasswordRequest)
	const reqBody = ForgotPasswordRequest.body.bind(ForgotPasswordRequest)

	/*
	 * Controller:
	 */
	const controller = ForgotPasswordController

	/*
	 * -----------------------------------------------------------------------------------*
	 * POST:
	 */

	router.post('/email', reqPublic, reqBody, controller.create.bind(controller))
	router.post('/phone', reqPublic, reqPhone, controller.create.bind(controller))

	return router
}
