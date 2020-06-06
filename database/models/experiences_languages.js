'use strict'
module.exports = (sequelize, DataTypes) => {
	const experiences_languages = sequelize.define(
		'experiences_languages',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			experiences_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			languages_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'experiences_languages',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	experiences_languages.associate = function (models) {
		/*
		 * Un experiences_languages tiene un experiences (1:1)
		 */
		models.experiences_languages.belongsTo(models.experiences, {
			foreignKey: 'experiences_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'experiences'
		})

		// Un experiences_languages tiene un languages (1:1)
		models.experiences_languages.belongsTo(models.languages, {
			foreignKey: 'languages_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'languages'
		})
	}

	return experiences_languages
}
