'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'standard_defects',
			[
				{
					id: 1,
					name: 'DOCUMENTATION',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 2,
					name: 'SYNTAX',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 3,
					name: 'BUILD',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 4,
					name: 'PACKAGE',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 5,
					name: 'ASSIGNMENT',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 6,
					name: 'INTERFACE',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 7,
					name: 'CHECKING',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 8,
					name: 'DATA',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 9,
					name: 'FUNCTION',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 10,
					name: 'SYSTEM',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 11,
					name: 'ENVIRONMENT',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('standard_defects', null, {})
	}
}
