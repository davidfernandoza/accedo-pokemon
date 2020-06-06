'use strict'

class Politic {
	constructor(rol, authRol, baseUrl, permissions) {
		this.rol = rol
		this.authRol = authRol
		this.baseUrl = baseUrl
		this.permissions = permissions
		this.error = 'Error en la configuración de los permisos'
	}

	async validate(req) {
		let passport = false

		// Validacion del rol de usuario.
		if (this.rol != req[this.authRol]) return { status: 200 }

		/*
		 * Validacion de Endpoint
		 */
		let endpoint = req.originalUrl.split('/')
		if (endpoint[2] === undefined) return { status: 404 }
		try {
			// Eliminar posible espacio al final de la ruta
			if (endpoint[endpoint.length - 1] === '') {
				endpoint.splice([endpoint.length - 1], 1)
			}
			const countUrlReq = endpoint.length
			const url = endpoint[2]
			const rules = this.permissions[url]

			// Validacion de formato de las reglas
			if (rules === undefined) return { status: 404 }

			// Reglas especificas
			if (Array.isArray(rules.subRoutes)) {
				rules.subRoutes.some(item => {
					if (
						item['route'] != undefined &&
						item['method'] != undefined &&
						item['status'] != undefined
					) {
						// Validacion de sub-rutas
						if (item.method.toUpperCase() === req.method) {
							/*
							 * Validacion del ultimo parametro de la ruta del esquema
							 */
							const rectifier = item.route.slice(-1) === '/' ? 1 : 0
							const routeArray = item.route.split('/')
							const countRouteArray = routeArray.length - rectifier

							// Validar si hay sub consultas
							if (countUrlReq > 3 && countRouteArray > 1) {
								/*
								 * Validar parametro de autentificacion
								 * en consultas unicas de cada usuario.
								 */

								if (item.status === 'unique') {
									const typeParameter = item.route.split(':')
									const valueParam = req.params[typeParameter[1]]

									if (
										item['authParameter'] === undefined ||
										typeParameter[1] == undefined
									)
										return { status: 500, message: this.error }

									// console.log(req[item.authParameter])

									// Validar si el usuario autentificado es el mismo de la consulta
									if (valueParam == req[item.authParameter]) {
										passport = true
										return true
									}
								} else if (req.route.path === item.route) {
									/*
									 * Validar si las rutas descartadas son iguales a las rutas de
									 * express
									 */
									if (item.status === 'enable') {
										passport = true
										return true
									}
								}
							} else if (countUrlReq === 3 && countRouteArray === 1) {
								/*
								 * Rutas sin sub-rutas, que se le aplica politica
								 */
								if (item.status === 'enable') {
									passport = true
									return true
								}
							}
						}
					} else return { status: 500, message: this.error }
				})
			} else if (rules.subRoutes === 'all' && rules.status != undefined) {
				/*
				 * Reglas generales
				 */
				if (rules.status === 'enable') {
					passport = true
				}
			} else return { status: 500, message: this.error }
		} catch (error) {
			return { status: 500, message: error }
		}

		if (passport) return { status: 200 }
		else return { status: 403 }
	}
}

module.exports = Politic
