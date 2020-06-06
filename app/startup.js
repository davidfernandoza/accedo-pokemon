'use strict'

/*
 * Se le pasa el servido por DI y este lo ejecuta con el metodo start
 */
class StartUp {
	constructor({ Server }) {
		this.server = Server
	}

	async start() {
		return await this.server.start().then(data => data)
	}
}
module.exports = StartUp
