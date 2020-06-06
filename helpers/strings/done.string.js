'use strict'

class DoneString {
	constructor() {
		this.DON200 = {
			status: 200,
			name: 'Ok',
			message: 'Resource delivered successfully'
		}
		this.DON201 = {
			status: 201,
			name: 'Created',
			message: 'Resource created successfully'
		}
		this.DON204 = {
			status: 204,
			name: 'No Content',
			message: 'Resource processed successfully'
		}
		this.DON404 = {
			status: 404,
			name: 'Not Found',
			message: 'Resource not found'
		}
	}
}

module.exports = DoneString
