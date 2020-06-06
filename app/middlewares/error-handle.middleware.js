/* eslint-disable indent */
'use strict'
// const axios = require('axios')
let code = 'ERR500'
let codeweb = '500'

class ErrorHandleMiddleware {
	#app = ''
	#apiUrl = ''

	constructor({ Config, StringHelper, ErrorString }) {
		this.config = Config
		this.errorString = ErrorString
		this.optionAxios = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Token-APP': Config.ERROR_HANDLER_TOKEN
			}
		}
		this.#apiUrl = Config.ERROR_HANDLER_API
		this.#app = StringHelper.capitalize(Config.APP_NAME)
	}

	async index(error, req, res, next) {
		let objError = {}
		let errorObject = {}
		let detail = null

		// Errores programados de api
		if (error.message.length === 6) {
			code = error.message
		}

		// Errores programados Web
		else if (error.message.length === 3) {
			objError = {
				app: this.#app.toUpperCase() // Nombre de la aplicacion
			}

			switch (error.message) {
				case '403':
					codeweb = '403'
					objError.title = 'Forbidden'
					break
				case '404':
					codeweb = '404'
					objError.title = 'Not Found'
					break
				default:
					objError.title = '500'
					break
			}

			return res.render(codeweb, objError)
		}

		// Errores no programados de api
		else {
			// Validacion de objeto
			try {
				objError = JSON.parse(error.message)

				// Refactorizado de campos a mostrar por error 400
				if (objError.status) {
					code = objError.status

					// Mapeo de errores en sequelice
					if (objError.package == 'sequelize') {
						detail = objError.errors.map(item => {
							const message = item.message.split('.')
							return {
								message: message[1],
								path: item.path
							}
						})
					} else {
						detail = objError.errors
					}
				}
			} catch (error) {
				error
			}
		}

		// Validar si el codigo que trae el error es valido
		if (this.errorString[code] == undefined) {
			code = 'ERR500'
		}

		// Enviar errores 500 a un servidor
		if (code == 'ERR500') {
			this.optionAxios.data = {
				name: error.name,
				message: error.message,
				stack: error.stack
			}
			try {
				console.error(error)

				// await axios(this.#apiUrl, this.optionAxios)
			} catch (error) {
				error
			}
		}
		errorObject.status = this.errorString[code].status
		errorObject.name = this.errorString[code].name
		errorObject.message = this.errorString[code].message
		errorObject.code = this.errorString[code].code
		if (detail) errorObject.detail = detail

		res.status(errorObject.status)
		res.json(errorObject)
		next(error.message)
	}
}
module.exports = ErrorHandleMiddleware
