'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'new_parts',
			[
				{
					programs_id: 1,
					types_sizes_id: 1,
					name: 'Name Ipsum 1',
					planned_lines: '025037168',
					number_methods_planned: '518092303',
					current_lines: '111664927',
					number_methods_current: '269759903',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					types_sizes_id: 2,
					name: 'Name Ipsum 2',
					planned_lines: '551077412',
					number_methods_planned: '921719969',
					current_lines: '090779213',
					number_methods_current: '958219027',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					types_sizes_id: 3,
					name: 'Name Ipsum 3',
					planned_lines: '181506027',
					number_methods_planned: '958651467',
					current_lines: '921435376',
					number_methods_current: '444503431',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 4,
					types_sizes_id: 4,
					name: 'Name Ipsum 4',
					planned_lines: '253305437',
					number_methods_planned: '613737571',
					current_lines: '569738935',
					number_methods_current: '752726740',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 5,
					types_sizes_id: 5,
					name: 'Name Ipsum 5',
					planned_lines: '010300751',
					number_methods_planned: '081016737',
					current_lines: '038744325',
					number_methods_current: '720805816',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 6,
					types_sizes_id: 6,
					name: 'Name Ipsum 6',
					planned_lines: '771543606',
					number_methods_planned: '107515828',
					current_lines: '755539419',
					number_methods_current: '190799312',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 7,
					types_sizes_id: 7,
					name: 'Name Ipsum 7',
					planned_lines: '963505437',
					number_methods_planned: '009272196',
					current_lines: '936589073',
					number_methods_current: '287074373',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 8,
					types_sizes_id: 8,
					name: 'Name Ipsum 8',
					planned_lines: '263393789',
					number_methods_planned: '733488423',
					current_lines: '829215680',
					number_methods_current: '456473516',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 9,
					types_sizes_id: 9,
					name: 'Name Ipsum 9',
					planned_lines: '908816076',
					number_methods_planned: '218327128',
					current_lines: '415515874',
					number_methods_current: '100199495',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 10,
					types_sizes_id: 10,
					name: 'Name Ipsum 10',
					planned_lines: '997751690',
					number_methods_planned: '077620609',
					current_lines: '200780000',
					number_methods_current: '399695248',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 11,
					types_sizes_id: 11,
					name: 'Name Ipsum 11',
					planned_lines: '695490443',
					number_methods_planned: '458819444',
					current_lines: '555831470',
					number_methods_current: '644929482',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 12,
					types_sizes_id: 12,
					name: 'Name Ipsum 12',
					planned_lines: '777401448',
					number_methods_planned: '132840317',
					current_lines: '628232064',
					number_methods_current: '106616216',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					types_sizes_id: 13,
					name: 'Name Ipsum 13',
					planned_lines: '768504451',
					number_methods_planned: '011153112',
					current_lines: '276660689',
					number_methods_current: '993779631',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('new_parts', null, {})
	}
}
