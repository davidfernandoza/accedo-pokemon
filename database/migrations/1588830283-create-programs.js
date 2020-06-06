'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('programs', {
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
			languages_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'languages', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			modules_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'modules', key: 'id' },
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			name: { type: Sequelize.STRING, allowNull: false },
			description: { type: Sequelize.TEXT, allowNull: false },
			total_lines: { type: Sequelize.INTEGER },
			planning_date: { type: Sequelize.BIGINT, allowNull: false },
			start_date: { type: Sequelize.BIGINT, allowNull: false },
			update_date: { type: Sequelize.BIGINT },
			delivery_date: { type: Sequelize.BIGINT },
			created_at: { allowNull: false, type: Sequelize.DATE },
			updated_at: { allowNull: false, type: Sequelize.DATE }
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('programs')
	}
}
