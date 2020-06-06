'use strict'
module.exports = (sequelize, DataTypes) => {
	const pip = sequelize.define(
		'pip',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			programs_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				isNumeric: true
			},
			description: { type: DataTypes.TEXT, allowNull: false },
			proposals: { type: DataTypes.TEXT, allowNull: false },
			comments: { type: DataTypes.TEXT },
			date: { type: DataTypes.BIGINT, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'pip',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	pip.associate = function (models) {
		/*
		 * Un pip tiene un programs (1:1)
		 */
		models.pip.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs'
		})
	}

	return pip
}
