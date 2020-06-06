'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('forgot_password', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			users_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true,
				references: { model: 'users', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			token: { type: Sequelize.STRING, allowNull: false, unique: true },
			expiration: { type: Sequelize.DATE, allowNull: false },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('forgot_password')
	}
}
