'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'projects_users',
			[
				{
					projects_id: 1,
					users_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 2,
					users_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 1,
					users_id: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 2,
					users_id: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 1,
					users_id: 4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 1,
					users_id: 5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 1,
					users_id: 6,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 2,
					users_id: 7,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 2,
					users_id: 8,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 2,
					users_id: 9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 2,
					users_id: 10,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 3,
					users_id: 3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
				// {
				// 	projects_id: 3,
				// 	users_id: 1,
				// 	created_at: new Date().toDateString(),
				// 	updated_at: new Date().toDateString()
				// }
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('projects_users', null, {})
	}
}
