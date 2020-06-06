'use strict'
const { join } = require('path')
const Repository = require(join(__dirname, './repository'))
const { Op } = require('sequelize')

class EstimatesRepository extends Repository {
	constructor({ DB, EstimatesDto, Config }) {
		super(DB, EstimatesDto, Config, 'estimates')
		this.db = DB
	}

	async getAllByLanguage(idLanguage, idOrganization) {
		return await super.getAll({
			query: {
				where: {
					[Op.and]: [
						{ languages_id: idLanguage },
						{ organizations_id: idOrganization }
					]
				}
			}
		})
	}

	async getAllByOrganization(idOrganizations, idLanguages, algorithm) {
		return await super.getAll({
			query: {
				where: {
					[Op.and]: [
						{ algorithm: algorithm },
						{ languages_id: idLanguages },
						{ organizations_id: idOrganizations }
					]
				}
			}
		})
	}

	async getByOwner(id, idOrganizations) {
		return await super.get({
			query: {
				where: {
					[Op.and]: [{ id }, { organizations_id: idOrganizations }]
				}
			}
		})
	}
}
module.exports = EstimatesRepository
