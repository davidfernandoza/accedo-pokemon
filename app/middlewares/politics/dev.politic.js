'use strict'
const { join } = require('path')
const Politic = require(join(__dirname, './politic'))

class DevPolitic extends Politic {
	constructor({ Config }) {
		const rol = Config.ROL.DEV
		const authRol = Config.ROL.ATTRIBUTE
		const baseUrl = Config.BASE_API
		const permissions = {
			auth: {
				subRoutes: 'all',
				status: 'enable'
			},
			projects: {
				subRoutes: [
					{
						route: '/by-user/:id',
						method: 'GET',
						status: 'unique',
						authParameter: 'id' // Parametro que inyecto el auth al request
					},
					{
						route: '/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'DELETE',
						status: 'disable'
					}
				]
			},
			modules: {
				subRoutes: [
					{
						route: '/by-project/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'disable'
					}
				]
			},
			users: {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'disable'
					},
					{
						route: '/free',
						method: 'GET',
						status: 'disable'
					},
					{
						route: '/by-project/:id',
						method: 'GET',
						status: 'disable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/add-project',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'unique',
						authParameter: 'id' // Parametro que inyecto el auth al request
					},
					{
						route: '/password',
						method: 'PATCH',
						status: 'enable'
					},
					{
						route: '/remove-project',
						method: 'POST',
						status: 'disable'
					}
				]
			},
			languages: {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'disable'
					}
				]
			},
			estimates: {
				subRoutes: [
					{
						route: '/by-language/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'disable'
					}
				]
			},
			'defect-logs': {
				subRoutes: [
					{
						route: '/by-program/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enable'
					}
				]
			},
			'time-logs': {
				subRoutes: [
					{
						route: '/by-program/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enable'
					}
				]
			},
			'test-reports': {
				subRoutes: [
					{
						route: '/by-program/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enable'
					}
				]
			},
			pip: {
				subRoutes: [
					{
						route: '/by-program/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enable'
					}
				]
			},
			programs: {
				subRoutes: [
					{
						route: '/by-module/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/by-organization/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enablle'
					}
				]
			}
		}
		super(rol, authRol, baseUrl, permissions)
	}

	async validate(req, res, next) {
		const permissions = await super.validate(req)
		if (permissions.status === 200) next()
		else if (permissions.status === 403) throw new Error('ERR403')
		else if (permissions.status === 404) throw new Error('ERR404')
		else throw new Error(permissions.message)
	}
}

module.exports = DevPolitic
