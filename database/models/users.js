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
			organizations_id: {
				type: DataTypes.INTEGER
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
			password: { type: DataTypes.STRING, allowNull: false },
			rol: { type: DataTypes.ENUM('ADMIN', 'DEV'), allowNull: false },
			phone: { type: DataTypes.STRING, allowNull: false, unique: true }
		},
		{
			timestamps: true,
			tableName: 'users',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	users.associate = function (models) {
		/*
		 * Un users se registra en muchos experiences (1:M)
		 */
		models.users.hasMany(models.experiences, {
			foreignKey: 'users_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'experiences'
		})

		/*
		 * Un users se registra en muchos programs (1:M)
		 */
		models.users.hasMany(models.programs, {
			foreignKey: 'users_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'programs'
		})

		// Un users tiene muchas projects (1:M)
		models.users.belongsToMany(models.projects, {
			through: models.projects_users, // Tabla pivote
			foreignKey: 'users_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'projects'
		})

		// Un users le pertenece a un forgot_password (1:1)
		models.users.hasOne(models.forgot_password, {
			foreignKey: 'users_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'forgot_password'
		})

		// Un users tiene un organizatios (1:1)
		models.users.belongsTo(models.organizations, {
			foreignKey: 'organizations_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'organizations'
		})
	}

	return users
}
