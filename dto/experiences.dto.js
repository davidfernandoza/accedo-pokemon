'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ExperiencesDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			positions_id: 'positions_id',
			users_id: 'users_id',
			organization: 'organization',
			years_position: 'years_position',
			years_generals: 'years_generals',
			years_organization: 'years_organization',
			years_configuration: 'years_configuration',
			years_integration: 'years_integration',
			years_requirements: 'years_requirements',
			years_design: 'years_design',
			years_tests: 'years_tests',
			years_support: 'years_support'
		}
		super(schema)
	}
}

module.exports = ExperiencesDto
