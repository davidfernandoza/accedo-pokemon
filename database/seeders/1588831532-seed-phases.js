'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'phases',
			[
				{
					id: 1,
					name: 'PLAN',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 2,
					name: 'DLD',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 3,
					name: 'CODE',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 4,
					name: 'COMPILE',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 5,
					name: 'UT',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					id: 6,
					name: 'PM',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('phases', null, {})
	}
}
