'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'modules',
			[
				{
					projects_id: 1,
					name: 'Name Ipsum 1',
					description:
						'Lorem Ipsum 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					planning_date: 1589754486,
					start_date: 1589754486,
					finish_date: 1589754486,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 2,
					name: 'Name Ipsum 2',
					description:
						'Lorem Ipsum 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					planning_date: 1589754486,
					start_date: 1589754486,
					finish_date: 1589754486,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 1,
					name: 'Name Ipsum 3',
					description:
						'Lorem Ipsum 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					planning_date: 1589754486,
					start_date: 1589754486,
					finish_date: 1589754486,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 1,
					name: 'Name Ipsum 4',
					description:
						'Lorem Ipsum 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					planning_date: 1589754486,
					start_date: 1589754486,
					finish_date: 1589754486,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 2,
					name: 'Name Ipsum 5',
					description:
						'Lorem Ipsum 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					planning_date: 1589754486,
					start_date: 1589754486,
					finish_date: 1589754486,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 1,
					name: 'Name Ipsum 6',
					description:
						'Lorem Ipsum 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					planning_date: 1589754486,
					start_date: 1589754486,
					finish_date: 1589754486,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					projects_id: 3,
					name: 'Name Ipsum 7',
					description:
						'Lorem Ipsum 7 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
					planning_date: 1589754486,
					start_date: 1589754486,
					finish_date: 1589754486,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('modules', null, {})
	}
}
