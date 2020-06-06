'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ReusablePartsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			programs_id: 'programs_id',
			programs_reusables_id: 'programs_reusables_id',
			planned_lines: 'planned_lines',
			current_lines: 'current_lines'
		}
		super(schema)
	}
}

module.exports = ReusablePartsDto
