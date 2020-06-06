'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class EstimatesDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			organizations_id: 'organizations_id',
			languages_id: 'languages_id',
			algorithm: 'algorithm',
			code_lines: 'code_lines'
		}
		super(schema)
	}
}

module.exports = EstimatesDto
