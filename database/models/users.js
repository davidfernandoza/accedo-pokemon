'use strict'
module.exports = (sequelize, DataTypes) => {
	const users = sequelize.define(
		'users',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			first_name: { type: DataTypes.STRING, allowNull: false },
			last_name: { type: DataTypes.STRING, allowNull: false },
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},
			password: { type: DataTypes.STRING, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'users',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	return users
}
