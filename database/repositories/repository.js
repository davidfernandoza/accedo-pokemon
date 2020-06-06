'use strict'
const { morphism } = require('morphism')
const { QueryTypes } = require('sequelize')
/*
 * Manejador de consultas a la base de datos
 */
class Repository {
	#query = null
	#dto = {}
	#data = {}

	constructor(db, entityDto, config, entity) {
		this.db = db
		this.entity = entity
		this.entityDto = entityDto
		this.codeError = 'ERR400'
		this.package = 'sequelize'
		this.config = config
		this.string = {
			ATEX: 'The attribute #1 already exists',
			ATNE: 'Attribute #1 does not exist',
			PRNE: 'Wrong parameters'
		}
	}

	async getByAttribute(options, addSubDto, transaction) {
		try {
			this.#dto = await this.entityDto.repository(addSubDto)
			this.#query = {
				where: { [options.data.attribute]: options.data.value },
				transaction: transaction
			}
			if (options.dto) this.#dto = options.dto

			switch (options.type) {
				case 'all':
					this.#data = await this.db[this.entity].findAll(this.#query)
					if (this.#data.length === 0) return null
					return this.#data.map(item => morphism(this.#dto, item))

				default:
					if (options.dto) this.#dto = options.dto
					this.#data = await this.db[this.entity].findOne(this.#query)
					if (!this.#data) return null
					return morphism(this.#dto, this.#data)
			}
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async getByInclude(options, addSubDto, transaction) {
		try {
			this.#dto = await this.entityDto.repository(addSubDto)
			this.#query = {
				include: [
					{
						model: this.db[options.includeEntity],
						as: options.includeAlias,
						required: options.includeRequired
					}
				],
				transaction: transaction
			}

			// Ajustando los where para las consultas
			if (options.where) {
				this.#query.where = options.where
			}

			if (options.includeWhere) {
				this.#query.include[0].where = options.includeWhere
			}

			if (options.dto) this.#dto = options.dto

			switch (options.type) {
				case 'all':
					this.#data = await this.db[this.entity].findAll(this.#query)
					if (this.#data.length === 0) return null
					return this.#data.map(item => morphism(this.#dto, item))

				default:
					if (options.dto) this.#dto = options.dto
					this.#data = await this.db[this.entity].findOne(this.#query)
					if (!this.#data) return null
					return morphism(this.#dto, this.#data)
			}
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	//  ---------------------------------------------------------------------------+

	async getBySql(options, addSubDto, transaction) {
		try {
			this.#dto = await this.entityDto.repository(addSubDto)
			if (options.dto) this.#dto = options.dto

			this.#data = await this.db.sequelize.query(options.query, {
				replacements: options.replace,
				type: QueryTypes.SELECT,
				transaction: transaction
			})

			switch (options.type) {
				case 'all':
					if (this.#data.length === 0) return null
					return this.#data.map(item => morphism(this.#dto, item))
				default:
					if (!this.#data) return null
					return morphism(this.#dto, this.#data)
			}
		} catch (error) {
			return await this.errorHandle(error)
		}
	}

	async getAll(options, addSubDto, transaction) {
		try {
			this.#dto = await this.entityDto.repository(addSubDto)
			if (options.query) this.#query = options.query
			else {
				this.#query = {
					transaction: transaction
				}
			}

			if (options.dto) this.#dto = options.dto

			this.#data = await this.db[this.entity].findAll(this.#query)
			if (this.#data.length === 0) return null
			return this.#data.map(item => morphism(this.#dto, item))
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async get(options, addSubDto, transaction) {
		try {
			this.#dto = await this.entityDto.repository(addSubDto)
			if (options.query) this.#query = options.query
			else {
				this.#query = {
					where: { id: options.id },
					transaction: transaction
				}
			}
			if (options.dto) this.#dto = options.dto
			this.#data = await this.db[this.entity].findOne(this.#query)
			if (!this.#data) return null
			return morphism(this.#dto, this.#data)
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async create(options, addSubDto, transaction) {
		try {
			/*
			 * Por lo general el addSubDto viene en false en el create
			 * ya que solo se usa para generar JSON con sub-objetos en
			 * las consultas, y cuando se guarda en una tabla en general
			 * no se guardan sub-JSON
			 */
			let baseDto = await this.entityDto.repository(addSubDto)
			this.#dto = options.dtoIn ? options.dtoIn : baseDto
			options.data = morphism(this.#dto, options.data)

			this.#data = await this.db[this.entity].create(options.data, {
				transaction: transaction
			})

			this.#dto = options.dtoOut ? options.dtoOut : baseDto
			return morphism(this.#dto, this.#data)
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async update(options, addSubDto, transaction) {
		try {
			this.#dto = await this.entityDto.repository(addSubDto)

			// Query diferente
			if (options.query) this.#query = options.query
			else {
				this.#query = {
					where: { id: options.id },
					transaction: transaction
				}
			}

			// DTO editado para persistir la data (se usa para el pach tambien)
			if (options.dto) this.#dto = options.dto

			// Procesamiento de la data
			options.data.id = options.id
			options.data = morphism(this.#dto, options.data)
			options.data = await this.deleteTimestamp(options.data)

			this.#data = await this.db[this.entity].update(options.data, this.#query)
			if (this.#data[0] == 0) return null
			return this.#data[0]
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async delete(options, transaction) {
		try {
			// Query diferente
			if (options.query) this.#query = options.query
			else {
				this.#query = {
					where: { id: options.id },
					transaction: transaction
				}
			}

			this.#data = await this.db[this.entity].destroy(this.#query)
			if (this.#data == 0) return null
			return this.#data
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	//  ---------------------------------------------------------------------------+

	async deleteTimestamp(entity) {
		delete entity.created_at
		delete entity.updated_at
		return entity
	}

	// Manejador de errores
	async errorHandle(error) {
		const objecError = JSON.parse(JSON.stringify(error))
		if (Object.entries(objecError).length === 0) {
			throw new Error(error)
		} else {
			let message = ''
			let path = ''

			/*
			 * Procesamiento de respuesta de la base de datos
			 */
			if (objecError.name == 'SequelizeUniqueConstraintError') {
				/*
				 * Postgres
				 * Seleccionar mensaje de error por codigo SQL
				 */
				if (this.config.DB.dialect == 'postgres') {
					if (objecError.parent.code == '23503') {
						message = this.string.ATNE
					}
					if (objecError.parent.code == '23505') {
						message = this.string.ATEX
					} else {
						throw new Error(error)
					}
					let arraySplit = objecError.parent.detail.split(')=(')
					arraySplit = arraySplit[0].split('(')
					path = arraySplit[1]
				}

				message = message.replace('#1', path)
				objecError.errors = [
					{
						message: `table.${message}`,
						path: path
					}
				]
			} else if (objecError.name == 'SequelizeDatabaseError') {
				/*
				 * Postgres
				 * Seleccionar mensaje de error por codigo SQL
				 */
				if (this.config.DB.dialect == 'postgres') {
					/*
					 * Parametros de url erroneo
					 */
					if (objecError.parent.code == '22P02') {
						objecError.errors = [
							{
								message: `table.${this.string.PRNE}`,
								path: 'Params'
							}
						]
					} else {
						throw new Error(error)
					}
				}
			}

			objecError.status = this.codeError
			objecError.package = this.package
			throw new Error(JSON.stringify(objecError))
		}
	}
}
module.exports = Repository
