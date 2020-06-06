'use strict'

class StringHelper {
	constructor() {}

	capitalize(string) {
		try {
			if (typeof string !== 'string') return string
			return string.charAt(0).toUpperCase() + string.slice(1)
		} catch (error) {
			return false
		}
	}
}
module.exports = StringHelper
