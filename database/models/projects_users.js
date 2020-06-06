'use strict'
module.exports = (sequelize, DataTypes) => {
	const projects_users = sequelize.define(
		'projects_users',
		{
			projects_id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			users_id: {
				primaryKey: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'projects_users',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	projects_users.associate = function (models) {
		/*
		 * Un projects_users tiene un projects (1:1)
		 */
		models.projects_users.belongsTo(models.projects, {
			foreignKey: 'projects_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'projects'
		})

		// Un projects_users tiene un users (1:1)
		models.projects_users.belongsTo(models.users, {
			foreignKey: 'users_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'users'
		})
	}

	return projects_users
}
