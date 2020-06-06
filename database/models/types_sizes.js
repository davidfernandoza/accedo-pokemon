'use strict'
module.exports = (sequelize, DataTypes) => {
	const types_sizes = sequelize.define(
		'types_sizes',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				isNumeric: true
			},
			name: { type: DataTypes.STRING, allowNull: false, unique: true },
			value: { type: DataTypes.DOUBLE, allowNull: false, isNumeric: true }
		},
		{
			timestamps: true,
			tableName: 'types_sizes',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)

	types_sizes.associate = function (models) {
		/*
		 * Un types_sizes se registra en muchos new_parts (1:M)
		 */
		models.types_sizes.hasMany(models.new_parts, {
			foreignKey: 'types_sizes_id', // a donde va
			sourceKey: 'id', // de donde se obtiene
			as: 'new_parts'
		})
	}

	return types_sizes
}
