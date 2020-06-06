'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'types_sizes',
			[
				{
					name: 'calculation-vs',
					value: 2.34,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'calculation-s',
					value: 5.13,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'calculation-m',
					value: 11.25,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'calculation-l',
					value: 24.66,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'calculation-vl',
					value: 54.04,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'data-vs',
					value: 2.6,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'data-s',
					value: 4.79,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'data-m',
					value: 8.84,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'data-l',
					value: 16.31,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'data-vl',
					value: 30.09,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'i/o-vs',
					value: 9.01,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'i/o-s',
					value: 12.06,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'i/o-m',
					value: 16.15,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'i/o-l',
					value: 21.62,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'i/o-vl',
					value: 28.93,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'logic-vs',
					value: 7.55,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'logic-s',
					value: 10.98,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'logic-m',
					value: 15.98,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'logic-l',
					value: 23.25,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'logic-vl',
					value: 33.83,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'setup-vs',
					value: 3.88,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'setup-s',
					value: 5.04,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'setup-m',
					value: 6.56,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'setup-l',
					value: 8.53,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'setup-vl',
					value: 11.09,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'text-vs',
					value: 3.75,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'text-s',
					value: 8.0,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'text-m',
					value: 17.07,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'text-l',
					value: 36.41,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'text-vl',
					value: 77.66,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('types_sizes', null, {})
	}
}
