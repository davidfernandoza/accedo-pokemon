'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))

class ProjectsRepository extends Repository {
	#queriesString = {}

	constructor({ DB, ProjectsDto, Config, QueriesString }) {
		super(DB, ProjectsDto, Config, 'projects')
		this.db = DB
		this.#queriesString = QueriesString.ProjectsRepository
	}

	async getAllByUser(idFind, idUser) {
		return await super.getBySql({
			query: this.#queriesString.getAllByUser,
			replace: { find: idFind, user: idUser },
			type: 'all'
		})
	}
}
module.exports = ProjectsRepository
