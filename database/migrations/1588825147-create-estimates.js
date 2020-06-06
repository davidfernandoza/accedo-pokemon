'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('estimates', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			languages_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'languages', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			algorithm: {
				type: Sequelize.STRING,
				allowNull: false
			},
			organizations_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'organizations', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			code_lines: { type: Sequelize.INTEGER, allowNull: false },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('estimates')
	}
}
