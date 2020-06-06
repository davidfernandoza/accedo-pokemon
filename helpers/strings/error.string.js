'use strict'

class ErrorString {
	constructor() {
		this.ERR400 = {
			status: 400,
			name: 'Bad Request',
			code: 'ERR400',
			message: 'Request created incorrectly'
		}

		this.ERR401 = {
			status: 401,
			name: 'Unauthorized',
			code: 'ERR401',
			message: 'Not authorized to request resources'
		}
		this.ERR403 = {
			status: 403,
			name: 'Forbidden',
			code: 'ERR403',
			message: 'There are not enough permissions'
		}

		this.ERR404 = {
			status: 404,
			name: 'Not Found',
			code: 'ERR404',
			message: 'Resource not found'
		}

		this.ERR500 = {
			status: 500,
			name: 'Internal Server Error',
			code: 'ERR500',
			message: 'Something went wrong, try again later'
		}

		this.REQ403EXT = {
			message: 'The #1 already exists'
		}

		this.REQ403 = {
			message: 'The #1'
		}

		this.REQ404 = {
			message: 'The #1 is not exists'
		}
	}
}

module.exports = ErrorString
