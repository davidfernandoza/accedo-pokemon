'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('phases', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: Sequelize.ENUM('PLAN', 'DLD', 'CODE', 'COMPILE', 'UT', 'PM'),
				allowNull: false
			},
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('phases')
	}
}
