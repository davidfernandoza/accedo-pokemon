'use strict'
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const { Router } = require('express')
require('express-async-errors')

module.exports = ({ AuthRoutes, UsersRoutes }) => {
	const routers = Router()
	const apiRoute = Router()

	// Parsear la peticion
	apiRoute
		.use(cors())
		.use(helmet())
		.use(bodyParser.urlencoded({ extended: false }))
		.use(bodyParser.json())
		.use(compression())

	// registro de las rutas
	apiRoute.use('/auth', AuthRoutes)
	apiRoute.use('/users', UsersRoutes)
	routers.use('/api/v1', apiRoute)

	/* ----------------------------------------------------------------------	*/
	/* Por defercto 																													*/
	/* ----------------------------------------------------------------------	*/

	// Not Found 404
	routers.use(() => {
		throw new Error('ERR404')
	})

	return routers
}
