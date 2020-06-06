'use strict'

const inq = require('inquirer')
const fs = require('fs')
const moment = require('moment')
const { join } = require('path')
const cliFolder = './config/cli/'
const requestFolder = './app/middlewares/requests/'
const routesFolder = './app/routes/'
const controllerFolder = './app/controllers/'
const migrationsFolder = './data/migrations/'
const modelsFolder = './data/models/'
const repositoryFolder = './data/repositories/'
const seedersFolder = './data/seeders/'
const dtoFolder = './dto/'

function run(message) {
	console.info('\n+-------------------------------------------+')
	console.info(`| ${message}`)
	console.info('+-------------------------------------------+\n')

	inq // Preguntas
		.prompt([
			{
				name: 'module',
				message: 'Module name (plural):',
				default: 'clients',
				validate: input => {
					return validate(input)
				}
			},
			{
				name: 'attributes',
				message:
					'Attribute list Ex:(attribute_1:integer;attribute_2:string;etc....):\n',
				default:
					'id:integer;users_id:integer;name:string;lastname:string;email:string;password:string;plan:enum("GOLD","BASIC");birthday:date;range:float;status:boolean;biography:text'
			},
			{
				type: 'checkbox',
				name: 'files',
				message: 'Files to make:',
				choices: [
					'request',
					'routes',
					'controller',
					'migrations',
					'models',
					'repository',
					'seeders',
					'dto'
				],
				validate: input => {
					return validate(input)
				}
			},
			{
				name: 'amount',
				default: 0,
				message: 'Number of seeders (only seeders):',
				validate: input => {
					let number = parseInt(input)
					return validate(number, true)
				}
			}
		])
		.then(async modules => {
			try {
				/*
				 * Manejador de los inputs
				 */

				let nameModule = modules.module.toLowerCase()
				let arrayName = modules.module.split('-')
				if (arrayName.length == 1) {
					arrayName = modules.module.split('_')
				}

				await modules.files.forEach(async (item, index) => {
					let baseFileFolder = cliFolder
					let filePath = ''
					let moduleName = ''
					let nameClass = ''
					let nameClassFull = ''
					let errorStatus = 0
					let attributes = ''
					let foreignKey_5 = null
					let objAtributes = {}
					let password_p = ''

					// Nombre de los archivos
					nameModule = nameModule.replace(/_/g, '-')

					/*
					 * Foreach para nombres compuestos
					 */
					arrayName.forEach(item_2 => {
						nameClass += capitalize(item_2)
					})

					moduleName = capitalize(item)

					// Ruta dependiendo del archivo a crear:
					nameClassFull = nameClass + moduleName
					if (
						item == 'migrations' ||
						item == 'models' ||
						item == 'dto' ||
						item == 'seeders' ||
						item == 'request'
					) {
						let keyValue = ''
						let foreignKey = ''
						let enums = ''

						// Manejador de semillas (seeders)
						if (item == 'seeders') {
							objAtributes = []
							for (let i = 0; i < modules.amount; i++) {
								objAtributes[i] = {}
							}
						}
						attributes = modules.attributes.split(';')

						attributes.forEach((item_3, index_3) => {
							try {
								keyValue = item_3.split(':')
								foreignKey = keyValue[0].split('_')
								enums = keyValue[1].slice(0, 4)

								// Crear el cuerpo del modelo----------------------------------------------------
								if (item == 'models') {
									/*
									 * Creacion de estructura del modelo
									 */

									// id
									if (keyValue[0] == 'id') {
										objAtributes[keyValue[0]] = {
											type: `|DataTypes.${keyValue[1].toUpperCase()}|`,
											allowNull: false,
											primaryKey: true
										}

										if (keyValue[1] == 'integer') {
											objAtributes[keyValue[0]].autoIncrement = true
											objAtributes[keyValue[0]].isNumeric = true
										}
									}

									//Email
									else if (keyValue[0] == 'email') {
										objAtributes[keyValue[0]] = {
											type: `|DataTypes.${keyValue[1].toUpperCase()}|`,
											allowNull: false,
											unique: true,
											validate: {
												isEmail: true
											}
										}
									}

									//Fecha
									else if (
										keyValue[1] == 'date' ||
										keyValue[1] == 'datetime' ||
										keyValue[1] == 'timestamp'
									) {
										objAtributes[keyValue[0]] = {
											type: '|DataTypes.DATE|',
											allowNull: false
										}
									}

									//Flotantes
									else if (keyValue[1] == 'float' || keyValue[1] == 'double') {
										objAtributes[keyValue[0]] = {
											type: '|DataTypes.DOUBLE|',
											allowNull: false,
											isNumeric: true
										}
									}

									// llaves foraneas
									else if (
										foreignKey.length > 1 &&
										foreignKey[foreignKey.length - 1] == 'id' &&
										keyValue[0] != 'id'
									) {
										foreignKey_5 = keyValue[0].slice(0, -3)
										objAtributes[keyValue[0]] = {
											type: `|DataTypes.${keyValue[1].toUpperCase()}|`,
											allowNull: false
										}

										if (keyValue[1] == 'integer') {
											objAtributes[keyValue[0]].isNumeric = true
										}
									}

									// otros
									else {
										objAtributes[keyValue[0]] = {
											type: `|DataTypes.${keyValue[1].toUpperCase()}|`,
											allowNull: false
										}
									}

									if (index_3 == 0) {
										baseFileFolder += 'models.txt'
										nameModule = nameModule.replace(/-/g, '_')
										filePath = modelsFolder + nameModule + '.js'
									}
								}

								// Crear el cuerpo de las migraciones ----------------------------------------------------
								else if (item == 'migrations') {
									/*
									 * Creacion de estructura del modelo
									 */

									// Id
									if (keyValue[0] == 'id') {
										objAtributes[keyValue[0]] = {
											type: `|Sequelize.${keyValue[1].toUpperCase()}|`,
											allowNull: false,
											primaryKey: true
										}

										if (keyValue[1] == 'integer') {
											objAtributes[keyValue[0]].autoIncrement = true
										}
									}

									//Email
									else if (keyValue[0] == 'email') {
										objAtributes[keyValue[0]] = {
											type: `|Sequelize.${keyValue[1].toUpperCase()}|`,
											allowNull: false,
											unique: true
										}
									}

									//Fecha
									else if (
										keyValue[0] == 'date' ||
										keyValue[0] == 'datetime' ||
										keyValue[0] == 'timestamp'
									) {
										objAtributes[keyValue[0]] = {
											type: '|Sequelize.DATE|',
											allowNull: false
										}
									}

									//Flotantes
									else if (keyValue[0] == 'float' || keyValue[0] == 'double') {
										objAtributes[keyValue[0]] = {
											type: '|Sequelize.DOUBLE|',
											allowNull: false
										}
									}

									// llaves foraneas
									else if (
										foreignKey.length > 1 &&
										foreignKey[foreignKey.length - 1] == 'id' &&
										keyValue[0] != 'id'
									) {
										objAtributes[keyValue[0]] = {
											type: `|Sequelize.${keyValue[1].toUpperCase()}|`,
											allowNull: false,
											references: {
												model: `${keyValue[0].slice(0, -3)}`,
												key: 'id'
											},
											onUpdate: 'cascade',
											onDelete: 'cascade'
										}
									}

									// Otros
									else {
										objAtributes[keyValue[0]] = {
											type: `|Sequelize.${keyValue[1].toUpperCase()}|`,
											allowNull: false
										}
									}

									if (index_3 == attributes.length - 1) {
										/*
										 * Fechas de control
										 */

										objAtributes.created_at = {
											allowNull: false,
											type: '|Sequelize.DATE|'
										}
										objAtributes.updated_at = {
											allowNull: false,
											type: '|Sequelize.DATE|'
										}
										baseFileFolder += 'migrations.txt'
										filePath = `${migrationsFolder}${moment().unix()}-create-${nameModule}.js`
									}

									// Crear el cuerpo de los seeders ----------------------------------------------------
								} else if (item == 'seeders') {
									/*
									 * Generador de informacion FAKE
									 */

									// Id sin auto incrementable
									if (keyValue[0] == 'id' && keyValue[1] != 'integer') {
										for (let i = 0; i < modules.amount; i++) {
											let id = strings(7)
											objAtributes[i][keyValue[0]] = id
										}
									}

									// Llaves foraneas
									else if (
										foreignKey[foreignKey.length - 1] == 'id' &&
										keyValue[0] != 'id'
									) {
										for (let i = 0; i < modules.amount; i++) {
											objAtributes[i][keyValue[0]] = i + 1
										}
									}

									// Correo
									else if (keyValue[0] == 'email') {
										for (let i = 0; i < modules.amount; i++) {
											let email = strings(7)
											email += `_${i + 1}@gmail.com`
											objAtributes[i][keyValue[0]] = email
										}
									}

									// Telefono
									else if (keyValue[0] == 'phone') {
										for (let i = 0; i < modules.amount; i++) {
											let phone = `31${numbers(8)}`
											objAtributes[i][keyValue[0]] = phone
										}
									}

									// Contraseñas
									else if (keyValue[0] == 'password') {
										for (let i = 0; i < modules.amount; i++) {
											objAtributes[i][keyValue[0]] = '|hash|'
										}
										password_p = `
										const salt = await bcrypt.genSalt(10)
										const hash = await bcrypt.hash('123456789', salt)
										`
									}

									// Numeros Enteros
									else if (keyValue[1] == 'integer' && keyValue[0] != 'id') {
										for (let i = 0; i < modules.amount; i++) {
											let number = numbers(9)
											objAtributes[i][keyValue[0]] = number
										}
									}

									// Numeros Flotantes
									else if (keyValue[1] == 'double' || keyValue[1] == 'float') {
										for (let i = 0; i < modules.amount; i++) {
											let number = numbers(6)
											objAtributes[i][keyValue[0]] = parseFloat(number / 3)
										}
									}

									// Fechas
									else if (
										(keyValue[1] == 'date' ||
											keyValue[1] == 'datetime' ||
											keyValue[1] == 'timestamp') &&
										keyValue[0] != 'id'
									) {
										for (let i = 0; i < modules.amount; i++) {
											let number = numbers(1)
											let date = moment().add(number, 'd').toISOString()
											number = numbers(1)
											date = moment(date).subtract(number, 'd').toISOString()
											objAtributes[i][keyValue[0]] = date
										}
									}

									// Boleanos
									else if (keyValue[1] == 'boolean' && keyValue[0] != 'id') {
										for (let i = 0; i < modules.amount; i++) {
											objAtributes[i][keyValue[0]] = true
										}
									}

									// Enums
									else if (enums == 'enum' && keyValue[0] != 'id') {
										let value = keyValue[1].replace(/enum/g, '')
										value = value.replace(/\(/g, '')
										value = value.replace(/\)/g, '')
										value = value.replace(/"/g, '')
										value = value.replace(/'/g, '')
										value = value.split(',')
										for (let i = 0; i < modules.amount; i++) {
											let result = enumRandom(value, 1)

											objAtributes[i][keyValue[0]] = value[result[0]]
										}
									}

									// Strings
									else if (
										keyValue[0] != 'password' &&
										keyValue[1] != 'boolean' &&
										keyValue[0] != 'phone' &&
										keyValue[0] != 'email' &&
										keyValue[1] != 'text' &&
										keyValue[0] != 'id'
									) {
										for (let i = 0; i < modules.amount; i++) {
											objAtributes[i][keyValue[0]] = `${capitalize(
												keyValue[0]
											)} Ipsum ${i + 1}`
										}
									}

									// Textos
									else if (keyValue[1] == 'text' && keyValue[0] != 'id') {
										for (let i = 0; i < modules.amount; i++) {
											objAtributes[i][keyValue[0]] = `Lorem Ipsum ${
												i + 1
											} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
										}
									}

									if (index_3 == attributes.length - 1) {
										// Fechas de control
										for (let i = 0; i < modules.amount; i++) {
											objAtributes[i].created_at = '|new Date().toDateString()|'
											objAtributes[i].updated_at = '|new Date().toDateString()|'
										}

										baseFileFolder += 'seeders.txt'
										filePath = `${seedersFolder}${moment().unix()}-seed-${nameModule}.js`
									}
								}

								// Crear el cuerpo de las validaciones request ------------------------------------------
								else if (item == 'request') {
									/*
									 * Entero
									 */
									if (keyValue[1] == 'integer') {
										objAtributes[keyValue[0]] =
											'|JoiValidator.number().integer().min(0).max(99999999990).required()|'
									}

									// Enum
									else if (enums == 'enum') {
										let value = keyValue[1].replace(/enum/g, '')
										value = value.replace(/\(/g, '')
										value = value.replace(/\)/g, '')
										objAtributes[
											keyValue[0]
										] = `|JoiValidator.any().valid(${value}).required()|`
									}

									// Email
									else if (keyValue[0] == 'email') {
										objAtributes[keyValue[0]] =
											'|JoiValidator.string().email({ignoreLength: true}).min(8).max(100).required()|'
									}

									// Fecha
									else if (
										keyValue[1] == 'date' ||
										keyValue[1] == 'datetime' ||
										keyValue[1] == 'timestamp'
									) {
										objAtributes[keyValue[0]] =
											'|JoiValidator.date().required()|'
									}

									// Flotantes
									else if (keyValue[1] == 'float' || keyValue[1] == 'double') {
										objAtributes[keyValue[0]] =
											'|JoiValidator.number().required()|'
									}

									// Boleano
									else if (keyValue[1] == 'boolean') {
										objAtributes[keyValue[0]] =
											'|JoiValidator.boolean().required()|'
									}

									// Texto
									else if (keyValue[1] == 'text') {
										objAtributes[keyValue[0]] =
											'|JoiValidator.string().min(8).allow("").optional()|'
									}

									// Cadena
									else {
										objAtributes[keyValue[0]] =
											'|JoiValidator.string().min(8).max(225).required()|'
									}

									if (index_3 == 0) {
										baseFileFolder += 'request.txt'
										filePath = requestFolder + nameModule + '.request.js'
									}
								} else {
									/*
									 * DTO
									 */
									objAtributes[keyValue[0]] = `${keyValue[0]}`

									if (index_3 == 0) {
										baseFileFolder += 'dto.txt'
										filePath = dtoFolder + nameModule + '.dto.js'
									}
								}
							} catch (error) {
								console.info(
									'\n\n+-------------------------------------------+'
								)
								console.info('| Error: | Invalid attribute list! ')
								console.info('+-------------------------------------------+')
								process.exit()
							}
						})
					}

					// Rutas:
					else if (item == 'routes') {
						baseFileFolder += 'routes.txt'
						filePath = routesFolder + nameModule + '.routes.js'
					}

					// Controlador:
					else if (item == 'controller') {
						baseFileFolder += 'controllers.txt'
						filePath = controllerFolder + nameModule + '.controller.js'
					}

					// Repositorio
					else if (item == 'repository') {
						baseFileFolder += 'repository.txt'
						filePath = repositoryFolder + nameModule + '.repository.js'
					} else throw new Error('Attribunes not check!')

					// Validacion de existencia de archivo.
					notExistFile(filePath).then(resNotExistFile => {
						if (resNotExistFile) {
							/*
							 * Remplazar los punteros por el nombre de la clase antes creado
							 */

							let file = fs.readFileSync(
								join(__dirname, baseFileFolder),
								'utf-8'
							)

							file = file.replace(/#1/g, nameClassFull)
							file = file.replace(/#2/g, nameClass)
							if (
								item == 'seeders' ||
								item == 'migrations' ||
								item == 'models' ||
								item == 'repository'
							) {
								nameModule = nameModule.replace(/-/g, '_')
								file = file.replace(/#3/g, nameModule)
							}
							file = file.replace(/#4/g, JSON.stringify(objAtributes))
							file = file.replace(/#5/g, foreignKey_5)
							file = file.replace(/#p/g, password_p)
							fs.appendFileSync(filePath, file)
						} else {
							errorStatus = 1
						}

						if (errorStatus == 0 && index == modules.files.length - 1) {
							//  Pregunta para generar nuevo modulo:
							console.info('\n\n+-------------------------------------------+')
							console.info(`| Success: | Your ${item} was create! `)
							console.info('+-------------------------------------------+\n\n')

							inq
								.prompt({
									type: 'confirm',
									name: 'make',
									message: 'Make new module:'
								})
								.then(confirm => {
									if (confirm.make) {
										return run('Make new module ')
									}
									console.info('By!')
								})
						} else if (errorStatus >= 1) {
							console.info('\n\n+-------------------------------------------+')
							console.info(`| Error: | Your ${item} already exists! `)
							console.info('+-------------------------------------------+')
							if (index == modules.files.length - 1) {
								return run('Make other module ')
							}
						} else {
							console.info('\n\n+-------------------------------------------+')
							console.info(`| Success: | Your ${item} was create! `)
							console.info('+-------------------------------------------+')
						}
					})
				})
			} catch (error) {
				console.info(`Error: ${error}`)
				process.exit()
			}
		})

	// -----------------------------------------------------------

	// Validar la correcta escritura
	function validate(input, num) {
		if ((!input || input.length == 0) && !num) {
			console.info('\nYou need to provide a value!\n')
			return false
		}
		if (num) {
			if (!isNaN(input) || input == 0) {
				return true
			} else {
				console.info('\nYou need to provide a number!\n')
				return false
			}
		} else {
			if (typeof input == 'number') {
				console.info('\nYou need to provide a string!\n')
				return false
			}
		}
		return true
	}

	// Capitalizar strings
	function capitalize(string) {
		try {
			if (typeof string !== 'string') return string
			return string.charAt(0).toUpperCase() + string.slice(1)
		} catch (error) {
			return false
		}
	}

	// Buscar la existencia de archivos
	function notExistFile(path) {
		return new Promise(resolve => {
			try {
				fs.openSync(path, 'r')
				resolve(false)
			} catch (error) {
				resolve(true)
			}
		})
	}

	function strings(length) {
		let result = ''
		let characters = 'abcdefghijklmnopqrstuvwxyz'
		let charactersLength = characters.length
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength))
		}
		return result
	}

	function numbers(length) {
		let result = ''
		let characters = '0123456789'
		let charactersLength = characters.length
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength))
		}
		return result
	}

	function enumRandom(arrayEnum, amount) {
		let valueRandom = []
		let values = []
		let i, j, r, c
		for (i = 0; i < amount; i++) {
			r = Math.floor(Math.random() * (arrayEnum.length - values.length)) + 1
			c = 0
			j = 0
			do if (values.indexOf(j++) == -1) c++
			while (c < r)
			j--
			valueRandom.push(arrayEnum[j])
			values.push(j)
		}
		return values
	}
}
run('Welcome to CLI')
