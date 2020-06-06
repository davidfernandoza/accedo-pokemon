'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('experiences', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			users_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'users', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			organization: { type: Sequelize.STRING, allowNull: false },
			years_position: { type: Sequelize.INTEGER, allowNull: false },
			years_generals: { type: Sequelize.INTEGER, allowNull: false },
			years_organization: { type: Sequelize.INTEGER, allowNull: false },
			years_configuration: { type: Sequelize.INTEGER, allowNull: false },
			years_integration: { type: Sequelize.INTEGER, allowNull: false },
			years_requirements: { type: Sequelize.INTEGER, allowNull: false },
			years_design: { type: Sequelize.INTEGER, allowNull: false },
			years_tests: { type: Sequelize.INTEGER, allowNull: false },
			years_support: { type: Sequelize.INTEGER, allowNull: false },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('experiences')
	}
}
