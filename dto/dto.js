'use strict'
const { morphism } = require('morphism')

class Dto {
	#subDto = []
	#subAttribute = ''

	constructor(schema, dto, attribute) {
		this.schema = schema

		// Dto del sub-dto
		this.#subDto = dto == undefined ? null : dto //array

		// Atributos para sub-dtos
		this.#subAttribute = attribute == undefined ? null : attribute //array
	}

	// ----------------------------------------------------

	async api(addSubDto) {
		/*
		 * (addSubDto) Esta opcion agrega el SUB-DTO a el mapeo.
		 */
		addSubDto = !addSubDto ? false : true
		let schema = { ...this.schema },
			typeDto = 'api'

		// Sub atributes
		if (this.#subDto != null && this.#subAttribute != null && addSubDto) {
			schema = await this.subIteration(schema, typeDto, addSubDto)
		}
		return schema
	}

	// --------------------------------------------------------------

	async repository(addSubDto) {
		/*
		 * (addSubDto) Esta opcion agrega el SUB-DTO a el mapeo.
		 */

		addSubDto = !addSubDto ? false : true

		let schema = { ...this.schema },
			typeDto = 'repository'
		schema.created_at = 'created_at'
		schema.updated_at = 'updated_at'

		// Sub atributes
		if (this.#subDto != null && this.#subAttribute != null && addSubDto) {
			schema = await this.subIteration(schema, typeDto, addSubDto)
		}
		return schema
	}

	// ----------------------------------------------------------------
	
	// Itera la cantidad de sub- esquemas que tenga un DTO principal
	async subIteration(schema, typeDto, addSubDto) {
		this.#subDto.forEach(async (subSchema, index) => {
			let dto = await subSchema[typeDto](addSubDto)
			schema[this.#subAttribute[index]] = await this.subItems(
				dto,
				this.#subAttribute[index]
			)
		})
		return schema
	}

	// Forma el DTO del sub esquema
	async subItems(dto, attribute) {
		return {
			path: attribute,
			fn: value => value.map(item => morphism(dto, item))
		}
	}
}
module.exports = Dto
