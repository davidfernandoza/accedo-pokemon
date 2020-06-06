'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ModulesDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			projects_id: 'projects_id',
			name: 'name',
			description: 'description',
			planning_date: 'planning_date',
			start_date: 'start_date',
			finish_date: 'finish_date'
		}
		super(schema)
	}
}

module.exports = ModulesDto
