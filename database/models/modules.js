'use strict'
module.exports = (sequelize, DataTypes) => {
	const modules = sequelize.define(
		'modules',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			projects_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
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
			tableName: 'modules',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	modules.associate = function (models) {
		/*
		 * Un modules se registra en muchos programs (1:M)
		 */
		models.modules.hasMany(models.programs, {
			foreignKey: 'modules_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'programs'
		})

		// Un modules tiene un projects (1:1)
		models.modules.belongsTo(models.projects, {
			foreignKey: 'projects_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'projects'
		})
	}

	return modules
}
