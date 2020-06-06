'use strict'

class QueriesString {
	constructor() {
		this.ProjectsRepository = {
			getAllByUser:
				'SELECT p.id, p.name, p.description, p.planning_date, p.start_date, p.finish_date FROM projects AS p INNER JOIN projects_users AS pu ON pu.projects_id = p.id	WHERE pu.users_id = :find AND pu.projects_id = ANY (SELECT pu2.projects_id	FROM projects_users AS pu2 WHERE pu2.users_id = :user);'
		}
	}
}

module.exports = QueriesString
