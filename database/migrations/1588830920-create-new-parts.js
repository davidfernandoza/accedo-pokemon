'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('new_parts', {
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
			types_sizes_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'types_sizes', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			name: { type: Sequelize.STRING, allowNull: false },
			planned_lines: { type: Sequelize.INTEGER, allowNull: false },
			number_methods_planned: { type: Sequelize.INTEGER, allowNull: false },
			current_lines: { type: Sequelize.INTEGER },
			number_methods_current: { type: Sequelize.INTEGER },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('new_parts')
	}
}
