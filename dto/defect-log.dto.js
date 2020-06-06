'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class DefectLogDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			defect_log_chained_id: 'defect_log_chained_id',
			programs_id: 'programs_id',
			standard_defects_id: 'standard_defects_id',
			phase_added_id: 'phase_added_id',
			phase_removed_id: 'phase_removed_id',
			description: 'description',
			solution: 'solution',
			start_date: 'start_date',
			finish_date: 'finish_date',
			time_for_repair: 'time_for_repair'
		}
		super(schema)
	}
}

module.exports = DefectLogDto
