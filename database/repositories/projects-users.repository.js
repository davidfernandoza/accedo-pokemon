'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { Op } = require('sequelize')

class ProjectsUsersRepository extends Repository {
	constructor({ DB, ProjectsUsersDto, Config }) {
		super(DB, ProjectsUsersDto, Config, 'projects_users')
		this.db = DB
	}
	// Aqui van las consultas especializadas

	async ownerProject(idProject, idUser) {
		return await super.get({
			query: {
				where: { [Op.and]: [{ users_id: idUser }, { projects_id: idProject }] }
			}
		})
	}

	async delete(idProject, idUser) {
		return await super.delete({
			query: {
				where: { [Op.and]: [{ users_id: idUser }, { projects_id: idProject }] }
			}
		})
	}
}
module.exports = ProjectsUsersRepository
