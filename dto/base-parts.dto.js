'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class BasePartsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			programs_id: 'programs_id',
			programs_base_id: 'programs_base_id',
			planned_lines_base: 'planned_lines_base',
			planned_lines_deleted: 'planned_lines_deleted',
			planned_lines_edits: 'planned_lines_edits',
			planned_lines_added: 'planned_lines_added',
			current_lines_base: 'current_lines_base',
			current_lines_deleted: 'current_lines_deleted',
			current_lines_edits: 'current_lines_edits',
			current_lines_added: 'current_lines_added'
		}
		super(schema)
	}
}

module.exports = BasePartsDto
