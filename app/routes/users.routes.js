'use strict'
const { Router } = require('express')

/*
 * Rutas de los Users:
 */

module.exports = ({
	ProjectsUsersController,
	UsersController,
	OwnersRequests,
	AuthMiddleware,
	UsersRequest,
	AdminPolitic,
	DevPolitic
}) => {
	const router = Router()

	/*
	 * Request (Validadores):
	 */
	const reqPrivate = UsersRequest.private.bind(UsersRequest)
	const reqBody = UsersRequest.body.bind(UsersRequest)
	const reqPassword = UsersRequest.bodyPassword.bind(UsersRequest)
	const reqUpdate = UsersRequest.bodyUpdate.bind(UsersRequest)
	const reqInclude = UsersRequest.bodyIncludeToProject.bind(UsersRequest)
	const organizationOwner = OwnersRequests.byOrganization.bind(OwnersRequests)
	const projectOwner = OwnersRequests.byProject.bind(OwnersRequests)

	/*
	 * Politics:
	 */
	const politics = [
		AdminPolitic.validate.bind(AdminPolitic),
		DevPolitic.validate.bind(DevPolitic)
	]

	/*
	 * Middlewares:
	 */
	const auth = AuthMiddleware.compare.bind(AuthMiddleware)

	/*
	 * Controller:
	 */
	const controller = UsersController
	const relationController = ProjectsUsersController

	/*
	 * -----------------------------------------------------------------------------------*
	 * GET:
	 */
	router.get(
		'/',
		reqPrivate,
		auth,
		politics,
		controller.getAllByOrganization.bind(controller)
	)

	router.get(
		'/free',
		reqPrivate,
		auth,
		politics,
		controller.getAllByOrganization.bind(controller)
	)

	router.get(
		'/by-project/:id',
		reqPrivate,
		auth,
		politics,
		projectOwner,
		controller.getAllByProject.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * POST:
	 */
	router.post(
		'/',
		reqPrivate,
		auth,
		politics,
		reqBody,
		controller.create.bind(controller)
	)

	router.post(
		'/add-project',
		reqPrivate,
		auth,
		politics,
		reqInclude,
		projectOwner,
		organizationOwner,
		relationController.create.bind(relationController)
	)

	router.post(
		'/remove-project',
		reqPrivate,
		auth,
		politics,
		reqInclude,
		projectOwner,
		organizationOwner,
		relationController.delete.bind(relationController)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PUT:
	 */
	router.put(
		'/:id',
		reqPrivate,
		auth,
		politics,
		organizationOwner,
		reqUpdate,
		controller.update.bind(controller)
	)

	/*
	 * -----------------------------------------------------------------------------------*
	 * PATCH:
	 */
	router.patch(
		'/password',
		reqPrivate,
		auth,
		politics,
		reqPassword,
		controller.changePassword.bind(controller)
	)

	return router
}
