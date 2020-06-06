'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'reusable_parts',
			[
				{
					programs_id: 1,
					programs_reusables_id: 1,
					planned_lines: '385145818',
					current_lines: '813678238',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					programs_reusables_id: 2,
					planned_lines: '141346326',
					current_lines: '773915218',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					programs_reusables_id: 3,
					planned_lines: '484397960',
					current_lines: '517014204',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('reusable_parts', null, {})
	}
}
