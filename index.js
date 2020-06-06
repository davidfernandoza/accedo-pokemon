'use strict'
const { join } = require('path')
const container = require(join(__dirname, './app/container'))
const app = container.resolve('App')
const config = container.resolve('Config')

// Inicio de aplicacion
app.start().then(async data => {
	try {
		console.info(
			`Aplicacion corriendo en -> ${config.BASE_URL}:${data.PORT}${config.BASE_API}`
		)
	} catch (error) {
		throw new Error(error)
	}
})
