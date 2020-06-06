'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ProjectsUsersDto extends Dto {
	constructor() {
		const schema = {
			projects_id: 'projects_id',
			users_id: 'users_id'
		}
		super(schema)
	}
}

module.exports = ProjectsUsersDto
