'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('pip', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			programs_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true,
				references: { model: 'programs', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			description: { type: Sequelize.TEXT, allowNull: false },
			proposals: { type: Sequelize.TEXT, allowNull: false },
			comments: { type: Sequelize.TEXT },
			date: { type: Sequelize.BIGINT, allowNull: false },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('pip')
	}
}
