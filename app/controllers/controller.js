'use strict'
const { morphism } = require('morphism')

class Controller {
	#doneString = null
	#data = {}
	#transaction = {}
	#addSubDto = {}
	#options = {}
	#code = ''

	constructor(EntityRepository, EntityDto, Config, DoneString) {
		this.entityRepository = EntityRepository
		this.entityDto = EntityDto

		if (Config) {
			this.config = Config
			this.app = Config.APP_NAME.toUpperCase()
		}

		// Singleton manual del objeto de mensajes
		if (!this.#doneString) {
			this.#doneString = DoneString
		}
	}

	async getByAttribute(options, addSubDto, transaction) {
		this.#transaction = !transaction ? null : transaction
		this.#addSubDto = !addSubDto ? false : true
		this.#options = {
			data: {
				attribute: options.attribute,
				value: options.value
			},
			type: options.type,
			dto: options.dto
		}

		this.#data = await this.entityRepository.getByAttribute(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)

		if (options.return || this.#transaction) return this.#data
		switch (options.type) {
			case 'all':
				this.#code = 'DON200L'
				break
			default:
				this.#code = 'DON200'
		}
		await this.response(options.res, this.#data, this.#code, this.#addSubDto)
	}

	// ------------------------------------------------------------------------------

	async getAll(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON200L'
		if (req.options) this.#options = req.options
		else {
			this.#options = {}
		}

		this.#data = await this.entityRepository.getAll(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)

		if (req.return || this.#transaction) return this.#data
		await this.response(res, this.#data, this.#code, this.#addSubDto)
	}

	async get(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON200'
		if (req.options) this.#options = req.options
		else {
			this.#options.id = req.params.id
		}

		this.#data = await this.entityRepository.get(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)
		if (req.return || this.#transaction) return this.#data
		await this.response(res, this.#data, this.#code, this.#addSubDto)
	}

	async create(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON201'
		if (req.options) this.#options = req.options
		else {
			this.#options.data = req.body
		}
		delete this.#options.data.id

		this.#data = await this.entityRepository.create(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)
		if (req.return || this.#transaction) return this.#data
		await this.response(res, this.#data, this.#code, this.#addSubDto)
	}

	async update(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON204'
		if (req.options) this.#options = req.options
		else {
			this.#options = {
				id: req.params.id,
				data: req.body,
				dto: req.dto
			}
		}
		delete this.#options.data.id
		this.#data = await this.entityRepository.update(
			this.#options,
			this.#addSubDto,
			this.#transaction
		)
		if (req.return || this.#transaction) return this.#data
		await this.response(res, this.#data, this.#code, this.#addSubDto)
	}

	async delete(req, res) {
		this.#transaction = !req.transaction ? null : req.transaction
		this.#addSubDto = !req.addSubDto ? false : true
		this.#code = 'DON204'
		if (req.options) this.#options = req.options
		else {
			this.#options.id = req.params.id
		}

		this.#data = await this.entityRepository.delete(
			this.#options,
			this.#transaction
		)
		if (req.return || this.#transaction) return this.#data
		await this.response(res, this.#data, this.#code, this.#addSubDto)
	}

	// ----------------------------------------------------------------------

	// Funcion que responde al cliente
	async response(res, entity, code, addSubDto, typeDto) {
		/*
		 * Atributo no encontrado
		 */

		if (!entity) {
			this.#doneString.DON404.payload = entity
			return res
				.status(this.#doneString.DON404.status)
				.send(this.#doneString.DON404)
		}

		// Respuesta WEB
		if (code == 'OK') {
			entity.app = this.app
			return res.render(entity.page, entity)
		}

		// Atributo OK
		else if (
			code == 'DON200' ||
			code == 'DON201' ||
			code == 'DON200L' ||
			code == 'DON201L'
		) {
			addSubDto = !addSubDto ? null : addSubDto
			const dto = !typeDto
				? await this.entityDto.api(addSubDto)
				: await this.entityDto[typeDto](addSubDto)
			if (code == 'DON200L' || code == 'DON201L') {
				entity = entity.map(item => morphism(dto, item))
				code = code == 'DON200L' ? 'DON200' : 'DON201'
			} else {
				entity = morphism(dto, entity)
			}
		}
		this.#doneString[code].payload = entity
		return res
			.status(this.#doneString[code].status)
			.send(this.#doneString[code])
	}
}

module.exports = Controller
