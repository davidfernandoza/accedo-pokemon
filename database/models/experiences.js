'use strict'
module.exports = (sequelize, DataTypes) => {
	const experiences = sequelize.define(
		'experiences',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			users_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			organization: { type: DataTypes.STRING, allowNull: false },
			years_position: { type: DataTypes.INTEGER, allowNull: false },
			years_generals: { type: DataTypes.INTEGER, allowNull: false },
			years_organization: { type: DataTypes.INTEGER, allowNull: false },
			years_configuration: { type: DataTypes.INTEGER, allowNull: false },
			years_integration: { type: DataTypes.INTEGER, allowNull: false },
			years_requirements: { type: DataTypes.INTEGER, allowNull: false },
			years_design: { type: DataTypes.INTEGER, allowNull: false },
			years_tests: { type: DataTypes.INTEGER, allowNull: false },
			years_support: { type: DataTypes.INTEGER, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'experiences',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	experiences.associate = function (models) {
		/*
		 * Un experiences tiene un users (1:1)
		 */
		models.experiences.belongsTo(models.users, {
			foreignKey: 'users_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'users'
		})

		// Un experiences tiene muchas languages (1:M)
		models.experiences.belongsToMany(models.languages, {
			through: models.experiences_languages, // Tabla pivote
			foreignKey: 'experiences_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'languages'
		})
	}

	return experiences
}
