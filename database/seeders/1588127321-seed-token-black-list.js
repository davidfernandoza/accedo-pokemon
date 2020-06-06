'use strict'

module.exports = {
	up: queryInterface => {
		return queryInterface.bulkInsert(
			'token_black_list',
			[
				{
					token:
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInJvbCI6InVzZXIiLCJpYXQiOjE1ODU3NTg1MDAsImV4cCI6MTU4NjM2MzMwMH0.bB4YKHT_zQuSd4YSTXsOLt_hBTfOstjajbcb3zqQi2g',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					token:
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInJvbCI6InVzZXIiLCJpYXQiOjE1ODU3MTUxMjYsImV4cCI6MTU4NjMxOTkyNn0.q03POPd0_GEmr4a0w_YZ7A7ffEIuVfQ2dcv760Ifbd8',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					token:
						'WyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInJvbCI6InVzZXIiLCJpYXQiOjE1OdDU3MTUxMjYsImV4cCI6MTU4NjMxOTkyNn0.q03POPd0_GEmr4a0w_YZ7A7ffEIuVfQ2dcv760Ifbd1',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('token_black_list', null, {})
	}
}
