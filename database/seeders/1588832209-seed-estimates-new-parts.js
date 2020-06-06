'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'estimates_new_parts',
			[
				{
					estimates_id: 1,
					new_parts_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 2,
					new_parts_id: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 3,
					new_parts_id: 3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 4,
					new_parts_id: 4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 5,
					new_parts_id: 5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 6,
					new_parts_id: 6,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 7,
					new_parts_id: 7,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 8,
					new_parts_id: 8,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 9,
					new_parts_id: 9,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 10,
					new_parts_id: 10,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 1,
					new_parts_id: 11,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 2,
					new_parts_id: 12,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					estimates_id: 3,
					new_parts_id: 13,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('estimates_new_parts', null, {})
	}
}
