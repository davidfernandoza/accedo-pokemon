'use strict'
module.exports = (sequelize, DataTypes) => {
	const organizations = sequelize.define(
		'organizations',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			name: { type: DataTypes.STRING, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'organizations',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	organizations.associate = function (models) {
		/*
		 * Una organizations se registra en muchos users (1:M)
		 */
		models.organizations.hasMany(models.users, {
			foreignKey: 'organizations_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'users'
		})

		// Una organizations se registra en muchos estimates (1:M)
		models.organizations.hasMany(models.estimates, {
			foreignKey: 'organizations_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'estimates'
		})
	}

	return organizations
}
