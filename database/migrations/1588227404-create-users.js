'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			organizations_id: {
				type: Sequelize.INTEGER,
				references: { model: 'organizations', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			first_name: { type: Sequelize.STRING, allowNull: false },
			last_name: { type: Sequelize.STRING, allowNull: false },
			email: { type: Sequelize.STRING, allowNull: false, unique: true },
			password: { type: Sequelize.STRING, allowNull: false },
			rol: { type: Sequelize.ENUM('ADMIN', 'DEV'), allowNull: false },
			phone: { type: Sequelize.STRING, allowNull: false, unique: true },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('users')
	}
}
