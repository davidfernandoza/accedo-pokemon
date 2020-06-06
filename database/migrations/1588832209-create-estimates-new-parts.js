'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('estimates_new_parts', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			estimates_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'estimates', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			new_parts_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'new_parts', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('estimates_new_parts')
	}
}
