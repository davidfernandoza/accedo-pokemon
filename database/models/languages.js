'use strict'
module.exports = (sequelize, DataTypes) => {
	const languages = sequelize.define(
		'languages',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			name: { type: DataTypes.STRING, unique: true, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'languages',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	languages.associate = function (models) {
		/*
		 * Un languages se registra en muchos estimates (1:M)
		 */
		models.languages.hasMany(models.estimates, {
			foreignKey: 'languages_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'estimates'
		})

		// Un languages se registra en muchos programs (1:M)
		models.languages.hasMany(models.programs, {
			foreignKey: 'languages_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'programs'
		})

		// Un languages tiene muchas null (1:M)
		models.languages.belongsToMany(models.experiences, {
			through: models.experiences_languages, // Tabla pivote
			foreignKey: 'languages_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'experiences'
		})
	}

	return languages
}
