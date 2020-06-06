'use strict'
module.exports = (sequelize, DataTypes) => {
	const forgot_password = sequelize.define(
		'forgot_password',
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
				unique: true,
				isNumeric: true
			},
			token: { type: DataTypes.STRING, allowNull: false, unique: true },
			expiration: { type: DataTypes.DATE, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'forgot_password',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	forgot_password.associate = function (models) {
		/*
		 * Un forgot_password tiene un users (1:1)
		 */
		models.forgot_password.belongsTo(models.users, {
			foreignKey: 'users_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'users'
		})
	}

	return forgot_password
}
