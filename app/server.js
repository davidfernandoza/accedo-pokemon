'use strict'
const express = require('express')

class Server {
	/*
	 * Se le pasa las configuraciones de entorno y las rutas por DI
	 * Monta el servidor con el metodo start.
	 */
	constructor({ Config, RoutesApi, ErrorHandleMiddleware }) {
		this.config = Config
		this.express = express()
		this.express.use(RoutesApi)

		//  Manejador de errores
		this.express.use(ErrorHandleMiddleware.index.bind(ErrorHandleMiddleware))
	}

	// Arranca el servidor
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
