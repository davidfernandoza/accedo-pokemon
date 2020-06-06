'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('defect_log', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			defect_log_chained_id: {
				type: Sequelize.INTEGER,
				references: { model: 'defect_log', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			programs_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'programs', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			standard_defects_id: {
				type: Sequelize.INTEGER,
				references: { model: 'standard_defects', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			phase_added_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'phases', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			phase_removed_id: {
				type: Sequelize.INTEGER,
				references: { model: 'phases', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			description: { type: Sequelize.TEXT, allowNull: false },
			solution: { type: Sequelize.TEXT },
			start_date: { type: Sequelize.BIGINT, allowNull: false },
			finish_date: { type: Sequelize.BIGINT },
			time_for_repair: { type: Sequelize.INTEGER },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('defect_log')
	}
}
