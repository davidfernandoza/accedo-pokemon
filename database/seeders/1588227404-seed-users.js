'use strict'
const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		const salt = await bcrypt.genSalt(10)
		const hash = await bcrypt.hash('123456789', salt)

		return queryInterface.bulkInsert(
			'users',
			[
				{
					// table_id: 1,
					organizations_id: 1,
					first_name: 'David Fernando',
					last_name: 'Torres Zapata',
					email: 'fernando.zapata.live@gmail.com',
					password: hash,
					rol: 'ADMIN',
					phone: '+57-3107148905',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 2,
					organizations_id: 1,
					first_name: 'Name Ipsum 2',
					last_name: 'Lastname Ipsum 2',
					email: 'jjdnezc_2@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279842',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 3,
					organizations_id: 1,
					first_name: 'Name Ipsum 3',
					last_name: 'Lastname Ipsum 3',
					email: 'nvntlku_3@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279843',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 4,
					organizations_id: 1,
					first_name: 'Name Ipsum 4',
					last_name: 'Lastname Ipsum 4',
					email: 'zijbkel_4@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279844',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 5,
					organizations_id: 1,
					first_name: 'Name Ipsum 5',
					last_name: 'Lastname Ipsum 5',
					email: 'ekcmtmm_5@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279845',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 6,
					organizations_id: 1,
					first_name: 'Name Ipsum 6',
					last_name: 'Lastname Ipsum 6',
					email: 'lqkvaik_6@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279846',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 7,
					organizations_id: 1,
					first_name: 'Name Ipsum 7',
					last_name: 'Lastname Ipsum 7',
					email: 'ibbdnzp_7@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279847',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 8,
					organizations_id: 1,
					first_name: 'Name Ipsum 8',
					last_name: 'Lastname Ipsum 8',
					email: 'vdtbicc_8@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279848',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 9,
					organizations_id: 1,
					first_name: 'Name Ipsum 9',
					last_name: 'Lastname Ipsum 9',
					email: 'ymjrper_9@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279849',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 11,
					organizations_id: 1,
					first_name: 'Name Ipsum 11',
					last_name: 'Lastname Ipsum 11',
					email: 'puemfok_11@gmail.com',
					password: hash,
					rol: 'ADMIN',
					phone: '+57-3893279814',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 12,
					organizations_id: 2,
					first_name: 'Name Ipsum 12',
					last_name: 'Lastname Ipsum 12',
					email: 'puemfok_12@gmail.com',
					password: hash,
					rol: 'ADMIN',
					phone: '+57-3893279812',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 13,
					organizations_id: 3,
					first_name: 'Name Ipsum 13',
					last_name: 'Lastname Ipsum 13',
					email: 'puemfok_13@gmail.com',
					password: hash,
					rol: 'ADMIN',
					phone: '+57-3893279811',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					// table_id: 14,
					organizations_id: 2,
					first_name: 'Name Ipsum 14',
					last_name: 'Lastname Ipsum 14',
					email: 'puemfok_14@gmail.com',
					password: hash,
					rol: 'DEV',
					phone: '+57-3893279884',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('users', null, {})
	}
}
