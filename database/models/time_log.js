'use strict'
module.exports = (sequelize, DataTypes) => {
	const time_log = sequelize.define(
		'time_log',
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
			phases_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				isNumeric: true
			},
			start_date: { type: DataTypes.BIGINT, allowNull: false },
			delta_time: {
				type: DataTypes.DOUBLE,
				isNumeric: true
			},
			finish_date: { type: DataTypes.BIGINT },
			interruption: { type: DataTypes.INTEGER, allowNull: false },
			comments: { type: DataTypes.TEXT }
		},
		{
			timestamps: true,
			tableName: 'time_log',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	time_log.associate = function (models) {
		/*
		 * Un time_log tiene un programs (1:1)
		 */
		models.time_log.belongsTo(models.programs, {
			foreignKey: 'programs_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'programs'
		})

		// Un time_log tiene un phases (1:1)
		models.time_log.belongsTo(models.phases, {
			foreignKey: 'phases_id', // a donde llega
			targetKey: 'id', // de donde viene
			as: 'phases'
		})
	}

	return time_log
}
