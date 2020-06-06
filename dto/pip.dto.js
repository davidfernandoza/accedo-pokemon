'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class PipDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			programs_id: 'programs_id',
			description: 'description',
			proposals: 'proposals',
			comments: 'comments',
			date: 'date'
		}
		super(schema)
	}
}

module.exports = PipDto
