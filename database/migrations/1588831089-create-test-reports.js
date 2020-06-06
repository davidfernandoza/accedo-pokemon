'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('test_reports', {
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
			test_number: { type: Sequelize.INTEGER, allowNull: false },
			test_name: { type: Sequelize.STRING, allowNull: false },
			conditions: { type: Sequelize.TEXT, allowNull: false },
			expected_result: { type: Sequelize.TEXT, allowNull: false },
			current_result: { type: Sequelize.TEXT },
			description: { type: Sequelize.TEXT },
			objective: { type: Sequelize.TEXT, allowNull: false },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('test_reports')
	}
}
