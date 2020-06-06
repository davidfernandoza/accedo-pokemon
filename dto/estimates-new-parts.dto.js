'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class EstimatesNewPartsDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			estimates_id: 'estimates_id',
			new_parts_id: 'new_parts_id'
		}
		super(schema)
	}
}

module.exports = EstimatesNewPartsDto
