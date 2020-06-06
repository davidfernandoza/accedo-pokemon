'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'time_log',
			[
				{
					programs_id: 1,
					phases_id: 1,
					start_date: 1589754486,
					delta_time: 307723.3333333333,
					finish_date: 1589754486,
					interruption: '25283800',
					comments:
						'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 2,
					phases_id: 2,
					start_date: 1589754486,
					delta_time: 201522.66666666666,
					finish_date: 1589754486,
					interruption: '40706111',
					comments:
						'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 3,
					phases_id: 3,
					start_date: 1589754486,
					delta_time: 197927,
					finish_date: 1589754486,
					interruption: '32494588',
					comments:
						'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 4,
					phases_id: 4,
					start_date: 1589754486,
					delta_time: 261635.66666666666,
					finish_date: 1589754486,
					interruption: '82629466',
					comments:
						'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 5,
					phases_id: 5,
					start_date: 1589754486,
					delta_time: 113970.33333333333,
					finish_date: 1589754486,
					interruption: '75885076',
					comments:
						'Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 6,
					phases_id: 6,
					start_date: 1589754486,
					delta_time: 232384.66666666666,
					finish_date: 1589754486,
					interruption: '64390236',
					comments:
						'Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 7,
					phases_id: 1,
					start_date: 1589754486,
					delta_time: 137812.33333333334,
					finish_date: 1589754486,
					interruption: '68806429',
					comments:
						'Lorem Ipsum 7 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 8,
					phases_id: 2,
					start_date: 1589754486,
					delta_time: 315144.6666666667,
					finish_date: 1589754486,
					interruption: '17418638',
					comments:
						'Lorem Ipsum 8 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 9,
					phases_id: 1,
					start_date: 1589754486,
					delta_time: 120286,
					finish_date: 1589754486,
					interruption: '17330757',
					comments:
						'Lorem Ipsum 9 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 10,
					phases_id: 2,
					start_date: 1589754486,
					delta_time: 42193.333333333336,
					finish_date: 1589754486,
					interruption: '63591802',
					comments:
						'Lorem Ipsum 10 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 11,
					phases_id: 3,
					start_date: 1589754486,
					delta_time: 170926,
					finish_date: 1589754486,
					interruption: '55302727',
					comments:
						'Lorem Ipsum 11 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					programs_id: 12,
					phases_id: 4,
					start_date: 1589754486,
					delta_time: 260412,
					finish_date: 1589754486,
					interruption: '86669603',
					comments:
						'Lorem Ipsum 12 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('time_log', null, {})
	}
}
