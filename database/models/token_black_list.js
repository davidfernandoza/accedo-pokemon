'use strict'
module.exports = (sequelize, DataTypes) => {
	const token_black_list = sequelize.define(
		'token_black_list',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			token: {
				allowNull: false,
				type: DataTypes.STRING
			}
		},
		{
			timestamps: true,
			tableName: 'token_black_list',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	return token_black_list
}
