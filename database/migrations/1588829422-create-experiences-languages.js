'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('experiences_languages', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			experiences_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'experiences', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			languages_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'languages', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('experiences_languages')
	}
}
