'use strict'
module.exports = (sequelize, DataTypes) => {
	const test_reports = sequelize.define(
		'test_reports',
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
			test_number: { type: DataTypes.INTEGER, allowNull: false },
			test_name: { type: DataTypes.STRING, allowNull: false },
			conditions: { type: DataTypes.TEXT, allowNull: false },
			expected_result: { type: DataTypes.TEXT, allowNull: false },
			current_result: { type: DataTypes.TEXT },
			description: { type: DataTypes.TEXT },
			objective: { type: DataTypes.TEXT, allowNull: false }
		},
		{
			timestamps: true,
			tableName: 'test_reports',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	test_reports.associate = function (models) {
		/*
		 * Un test_reports tiene un programs (1:1)
		 */
		models.test_reports.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs'
		})
	}

	return test_reports
}
