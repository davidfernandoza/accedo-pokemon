'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'base_parts',
			[
				{
					programs_id: 1,
					programs_base_id: 1,
					planned_lines_base: '451835290',
					planned_lines_deleted: '161268457',
					planned_lines_edits: '532087851',
					planned_lines_added: '818189948',
					current_lines_base: '495906125',
					current_lines_deleted: '313662680',
					current_lines_edits: '894716861',
					current_lines_added: '490015123',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					programs_base_id: 2,
					planned_lines_base: '456890349',
					planned_lines_deleted: '532238653',
					planned_lines_edits: '960797472',
					planned_lines_added: '383237574',
					current_lines_base: '401204808',
					current_lines_deleted: '164369279',
					current_lines_edits: '266906122',
					current_lines_added: '817509874',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('base_parts', null, {})
	}
}
