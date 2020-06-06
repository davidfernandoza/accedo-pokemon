'use strict'
module.exports = (sequelize, DataTypes) => {
	const standard_defects = sequelize.define(
		'standard_defects',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				isNumeric: true
			},
			name: {
				type: DataTypes.ENUM(
					'DOCUMENTATION',
					'SYNTAX',
					'BUILD',
					'PACKAGE',
					'ASSIGNMENT',
					'INTERFACE',
					'CHECKING',
					'DATA',
					'FUNCTION',
					'SYSTEM',
					'ENVIRONMENT'
				),
				allowNull: false,
				unique: true
			}
		},
		{
			timestamps: true,
			tableName: 'standard_defects',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	standard_defects.associate = function (models) {
		/*
		 * Un standard-defects se registra en muchos defect_log (1:M)
		 */
		models.standard_defects.hasMany(models.defect_log, {
			foreignKey: 'standard_defects_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'defect_log'
		})
	}

	return standard_defects
}
