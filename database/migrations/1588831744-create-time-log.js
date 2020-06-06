'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('time_log', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			programs_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'programs', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			phases_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'phases', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			start_date: { type: Sequelize.BIGINT, allowNull: false },
			delta_time: { type: Sequelize.DOUBLE },
			finish_date: { type: Sequelize.BIGINT },
			interruption: { type: Sequelize.INTEGER, allowNull: false },
			comments: { type: Sequelize.TEXT },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('time_log')
	}
}
