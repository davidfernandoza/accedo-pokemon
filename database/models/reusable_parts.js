'use strict'
module.exports = (sequelize, DataTypes) => {
	const reusable_parts = sequelize.define(
		'reusable_parts',
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
				isNumeric: true
			},
			programs_reusables_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			planned_lines: { type: DataTypes.INTEGER, allowNull: false },
			current_lines: { type: DataTypes.INTEGER }
		},
		{
			timestamps: true,
			tableName: 'reusable_parts',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	reusable_parts.associate = function (models) {
		/*
		 * Un reusable_parts tiene un programs (1:1)
		 */
		models.reusable_parts.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs_1'
		})

		// Un reusable_parts tiene un programs (1:1)
		models.reusable_parts.belongsTo(models.programs, {
			foreignKey: 'programs_reusables_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs_2'
		})
	}

	return reusable_parts
}
