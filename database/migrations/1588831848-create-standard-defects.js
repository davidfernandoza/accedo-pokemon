'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('standard_defects', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: Sequelize.ENUM(
					'DOCUMENTATION',
					'SYNTAX',
					'BUILD',
					'PACKAGE',
					'ASSIGNMENT',
					'INTERFACE',
					'CHECKING',
					'DATA',
					'FUNCTION',
					'SYSTEM',
					'ENVIRONMENT'
				),
				allowNull: false,
				unique: true
			},
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('standard_defects')
	}
}
