'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class TestReportsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			programs_id: 'programs_id',
			test_number: 'test_number',
			test_name: 'test_name',
			conditions: 'conditions',
			expected_result: 'expected_result',
			current_result: 'current_result',
			description: 'description',
			objective: 'objective'
		}
		super(schema)
	}
}

module.exports = TestReportsDto
