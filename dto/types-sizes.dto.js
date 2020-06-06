'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class TypesSizesDto extends Dto {
	constructor() {
		const schema = {"id":"id","name":"name","value":"value"}
		super(schema)
	}
}

module.exports = TypesSizesDto
