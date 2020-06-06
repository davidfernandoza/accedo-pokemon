'use strict'
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const { Router } = require('express')

module.exports = ({ RecoverPasswordWebRoutes }) => {
	const router = Router()
	// registrar las rutas
	router
		.use(cors())
		.use(helmet())
		.use(bodyParser.urlencoded({ extended: false }))
		.use(bodyParser.json())
		.use(compression())

	router.use('/recover-password', RecoverPasswordWebRoutes)

	return router
}
