'use strict'
module.exports = (sequelize, DataTypes) => {
	const estimates_new_parts = sequelize.define(
		'estimates_new_parts',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			estimates_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			new_parts_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			}
		},
		{
			timestamps: true,
			tableName: 'estimates_new_parts',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	estimates_new_parts.associate = function (models) {
		/*
		 * Un estimates_new_parts tiene un new_parts (1:1)
		 */
		models.estimates_new_parts.belongsTo(models.new_parts, {
			foreignKey: 'new_parts_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'new_parts'
		})

		// Un estimates_new_parts tiene un estimates (1:1)
		models.estimates_new_parts.belongsTo(models.estimates, {
			foreignKey: 'estimates_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'estimates'
		})
	}

	return estimates_new_parts
}
