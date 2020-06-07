'use strict'
const { morphism } = require('morphism')

class Auth {
	#encryptionHelper = {}
	constructor(
		EntityRepository,
		EncryptionHelper,
		EntityDto,
		JWTService,
		DataEntity,
		DoneString
	) {
		this.entityRepository = EntityRepository
		this.dataEntity = DataEntity
		this.JWTServices = JWTService
		this.entityDto = EntityDto
		this.doneString = DoneString
		this.#encryptionHelper = EncryptionHelper
	}

	async login(req, res) {
		// Consulta de usuario
		const { identity, password } = req.body
		const dataEntity = await this.entityRepository.getByAttribute({
			data: {
				attribute: this.dataEntity.attribute,
				value: identity
			},
			type: 'one'
		})

		// Validacion de existencia o despido de usuario
		if (!dataEntity) throw new Error('ERR401')

		// Comparar el password del usuario
		const result = await this.#encryptionHelper.decryption(
			password,
			dataEntity.password
		)
		if (!result) throw new Error('ERR401')

		// Generar token
		const authToken = await this.JWTServices.create(dataEntity.id)
		if (authToken.status != 200) throw new Error('ERR401')

		if (req.return) return authToken.payload.token

		// Formateo de respuesta exitosa para el usuario
		dataEntity.token = authToken.payload.token
		const dto = await this.entityDto.api(),
			entity = morphism(dto, dataEntity)
		this.doneString.DON200.payload = entity

		return res
			.status(this.doneString.DON200.status)
			.send(this.doneString.DON200)
	}
}

module.exports = Auth
