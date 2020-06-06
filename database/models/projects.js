'use strict'
module.exports = (sequelize, DataTypes) => {
	const projects = sequelize.define(
		'projects',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			name: { type: DataTypes.STRING, allowNull: false },
			description: { type: DataTypes.TEXT, allowNull: false },
			planning_date: { type: DataTypes.BIGINT, allowNull: false },
			start_date: { type: DataTypes.BIGINT },
			finish_date: { type: DataTypes.BIGINT }
		},
		{
			timestamps: true,
			tableName: 'projects',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	projects.associate = function (models) {
		/*
		 * Un projects se registra en muchos modules (1:M)
		 */
		models.projects.hasMany(models.modules, {
			foreignKey: 'projects_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'modules'
		})

		// Un projects tiene muchas users (1:M)
		models.projects.belongsToMany(models.users, {
			through: models.projects_users, // Tabla pivote
			foreignKey: 'projects_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'users'
		})
	}

	return projects
}
