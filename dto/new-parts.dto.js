'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class NewPartsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			programs_id: 'programs_id',
			types_sizes_id: 'types_sizes_id',
			name: 'name',
			planned_lines: 'planned_lines',
			number_methods_planned: 'number_methods_planned',
			size_planned: 'size_planned',
			current_lines: 'current_lines',
			number_methods_current: 'number_methods_current'
		}
		super(schema)
	}
}

module.exports = NewPartsDto
