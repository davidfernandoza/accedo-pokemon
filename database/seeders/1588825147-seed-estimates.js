'use strict'
// const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		return queryInterface.bulkInsert(
			'estimates',
			[
				{
					languages_id: 1,
					organizations_id: 1,
					algorithm: 'Burbuja',
					code_lines: '287289344',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 2,
					organizations_id: 1,
					algorithm: 'Arbol',
					code_lines: '212726423',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 3,
					organizations_id: 1,
					algorithm: 'Arbol Binario',
					code_lines: '909964228',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 4,
					organizations_id: 1,
					algorithm: 'Busqueda Desendente',
					code_lines: '389665954',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 5,
					organizations_id: 1,
					algorithm: 'Camino Corto',
					code_lines: '878209359',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 1,
					organizations_id: 1,
					algorithm: 'Ordenamiento',
					code_lines: '029036651',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 2,
					organizations_id: 1,
					algorithm: 'Grupo de nodos',
					code_lines: '136425831',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 3,
					organizations_id: 1,
					algorithm: 'Integracion',
					code_lines: '139573361',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 4,
					organizations_id: 3,
					algorithm: 'Lista en Pila',
					code_lines: '473931463',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					languages_id: 5,
					organizations_id: 2,
					algorithm: 'Burbuja',
					code_lines: '110175547',
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},
	down: queryInterface => {
		return queryInterface.bulkDelete('estimates', null, {})
	}
}
