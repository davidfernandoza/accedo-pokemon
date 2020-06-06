'use strict'
const { Router } = require('express')

/*
 * Rutas de los ForgotPassword:
 */

module.exports = ({ ForgotPasswordController, ForgotPasswordRequest }) => {
	const router = Router()

	/*
	 * Request (validadores):
	 */
	const password = ForgotPasswordRequest.password.bind(ForgotPasswordRequest)

	/*
	 * Controller:
	 */
	const controller = ForgotPasswordController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */

	router.get('/:token', controller.index.bind(controller))
	router.post('/:token', password, controller.recoverPassword.bind(controller))

	return router
}
