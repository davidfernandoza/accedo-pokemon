'use strict'
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

class Server {
	/*
	 * Se le pasa las configuraciones de entorno y las rutas por DI
	 * Monta el servidor con el metodo start.
	 */
	constructor({ Config, RoutesApi, RoutesWeb, ErrorHandleMiddleware }) {
		this.config = Config
		this.express = express()
		this.express.use(morgan('dev'))
		this.express.use(express.static('./public'))
		this.express.engine(
			'.hbs',
			handlebars({
				extname: '.hbs',
				partialsDir: `${__dirname}/../views/layouts/partials`
			})
		)
		this.express.set('view engine', '.hbs')
		this.express.use(RoutesWeb)
		this.express.use(RoutesApi)

		//  Manejador de errores
		this.express.use(ErrorHandleMiddleware.index.bind(ErrorHandleMiddleware))
	}

	async start() {
		return new Promise((resolve, reject) => {
			try {
				const http = this.express.listen(this.config.PORT, () => {
					const { port } = http.address()
					resolve({ PORT: port })
				})
			} catch (error) {
				reject(error)
			}
		})
	}
}

module.exports = Server
