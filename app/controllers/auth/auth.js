'use strict'
const { morphism } = require('morphism')

class Auth {
	#encryptionHelper = {}
	constructor(
		EntityController,
		EncryptionHelper,
		EntityDto,
		JWTService,
		DataEntity,
		DoneString
	) {
		this.entityController = EntityController
		this.dataEntity = DataEntity
		this.JWTServices = JWTService
		this.entityDto = EntityDto
		this.doneString = DoneString
		this.#encryptionHelper = EncryptionHelper
	}

	async login(req, res) {
		const { identity, password } = req.body

		// Consulta de usuario
		const dataEntity = await this.entityController.getByAttribute({
			attribute: this.dataEntity.attribute,
			value: identity,
			type: 'one',
			return: true,
			res: res
		})

		// Validacion de existencia o despido de usuario
		if (!dataEntity) throw new Error('ERR401')
		if (!dataEntity.organizations_id) throw new Error('ERR401')

		// Comparar el password del usuario
		const result = await this.#encryptionHelper.decryption(
			password,
			dataEntity.password
		)
		if (!result) throw new Error('ERR401')

		// Generar token
		const authToken = await this.JWTServices.create(
			dataEntity.id,
			dataEntity.rol,
			dataEntity.organizations_id
		)
		if (authToken.status != 200) throw new Error('ERR401')

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
