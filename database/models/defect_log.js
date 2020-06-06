'use strict'
module.exports = (sequelize, DataTypes) => {
	const defect_log = sequelize.define(
		'defect_log',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			defect_log_chained_id: {
				type: DataTypes.INTEGER,
				isNumeric: true
			},
			programs_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			standard_defects_id: {
				type: DataTypes.INTEGER,
				isNumeric: true
			},
			phase_added_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			phase_removed_id: {
				type: DataTypes.INTEGER,
				isNumeric: true
			},
			description: { type: DataTypes.TEXT, allowNull: false },
			solution: { type: DataTypes.TEXT },
			start_date: { type: DataTypes.BIGINT, allowNull: false },
			finish_date: { type: DataTypes.BIGINT },
			time_for_repair: { type: DataTypes.INTEGER }
		},
		{
			timestamps: true,
			tableName: 'defect_log',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	defect_log.associate = function (models) {
		/*
		 * Un defect_log se registra en muchos defect_log (1:M)
		 */
		models.defect_log.hasMany(models.defect_log, {
			foreignKey: 'defect_log_chained_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'defect_log_chained_1'
		})

		// Un defect_log tiene un defect_log (1:1)
		models.defect_log.belongsTo(models.defect_log, {
			foreignKey: 'defect_log_chained_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'defect_log_chained_2'
		})

		// Un defect_log tiene un programs (1:1)
		models.defect_log.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs'
		})

		// Un defect_log tiene un standard_defects (1:1)
		models.defect_log.belongsTo(models.standard_defects, {
			foreignKey: 'standard_defects_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'standard_defects'
		})
		// Un defect_log tiene un phase_added (1:1)
		models.defect_log.belongsTo(models.phases, {
			foreignKey: 'phase_added_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'phases_added'
		})

		// Un defect_log tiene un phase_removed (1:1)
		models.defect_log.belongsTo(models.phases, {
			foreignKey: 'phase_removed_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'phases_removed'
		})
	}

	return defect_log
}
