'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class ExperiencesLanguagesDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			experiences_id: 'experiences_id',
			languages_id: 'languages_id'
		}
		super(schema)
	}
}

module.exports = ExperiencesLanguagesDto
