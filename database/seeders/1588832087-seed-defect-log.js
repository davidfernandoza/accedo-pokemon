'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'defect_log',
			[
				{
					defect_log_chained_id: null,
					programs_id: 1,
					standard_defects_id: 1,
					phase_added_id: 1,
					phase_removed_id: 1,
					description:
						'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '281271804',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 2,
					standard_defects_id: 2,
					phase_added_id: 2,
					phase_removed_id: 3,
					description:
						'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '060377428',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 3,
					standard_defects_id: 3,
					phase_added_id: 3,
					phase_removed_id: 5,
					description:
						'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '002880629',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 4,
					standard_defects_id: 4,
					phase_added_id: 4,
					phase_removed_id: 5,
					description:
						'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '483765806',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 5,
					standard_defects_id: 3,
					phase_added_id: 5,
					phase_removed_id: 6,
					description:
						'Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '661055408',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 6,
					standard_defects_id: 2,
					phase_added_id: 6,
					phase_removed_id: 6,
					description:
						'Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '071525108',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 7,
					standard_defects_id: 4,
					phase_added_id: 2,
					phase_removed_id: 5,
					description:
						'Lorem Ipsum 7 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 7 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '678143222',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 8,
					standard_defects_id: 4,
					phase_added_id: 1,
					phase_removed_id: 5,
					description:
						'Lorem Ipsum 8 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 8 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '246469653',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 9,
					standard_defects_id: 3,
					phase_added_id: 5,
					phase_removed_id: 4,
					description:
						'Lorem Ipsum 9 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 9 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '205392658',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 3,
					standard_defects_id: 4,
					phase_added_id: 1,
					phase_removed_id: 6,
					description:
						'Lorem Ipsum 10 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 10 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '570163923',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 11,
					standard_defects_id: 2,
					phase_added_id: 1,
					phase_removed_id: 2,
					description:
						'Lorem Ipsum 11 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 11 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '742911700',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					defect_log_chained_id: null,
					programs_id: 12,
					standard_defects_id: 3,
					phase_added_id: 1,
					phase_removed_id: 3,
					description:
						'Lorem Ipsum 12 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					solution:
						'Lorem Ipsum 12 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					start_date: 1589754486,
					finish_date: 1589754486,
					time_for_repair: '608383560',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('defect_log', null, {})
	}
}
