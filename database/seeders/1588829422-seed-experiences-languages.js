'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'experiences_languages',
			[
				{
					experiences_id: 1,
					languages_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 2,
					languages_id: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 3,
					languages_id: 3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 4,
					languages_id: 4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 5,
					languages_id: 5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 6,
					languages_id: 1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 7,
					languages_id: 2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 8,
					languages_id: 3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 9,
					languages_id: 4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					experiences_id: 10,
					languages_id: 5,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('experiences_languages', null, {})
	}
}
