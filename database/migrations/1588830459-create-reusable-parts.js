'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('reusable_parts', {
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
			programs_reusables_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'programs', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			planned_lines: { type: Sequelize.INTEGER, allowNull: false },
			current_lines: { type: Sequelize.INTEGER },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('reusable_parts')
	}
}
