'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('modules', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			projects_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'projects', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			name: { type: Sequelize.STRING, allowNull: false },
			description: { type: Sequelize.TEXT, allowNull: false },
			planning_date: { type: Sequelize.BIGINT, allowNull: false },
			start_date: { type: Sequelize.BIGINT },
			finish_date: { type: Sequelize.BIGINT },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('modules')
	}
}
