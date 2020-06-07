'use strict'
/* -----------------------------------------------------*/
/* Archivo que registra las instancias del proyecto 		*/
/* para la inyeccion de dependencias										*/
/*------------------------------------------------------*/

/* -----------------------------------------------------*/
/* System: 																							*/
/*------------------------------------------------------*/
const { join } = require('path')
const { asClass, asFunction, asValue, createContainer } = require('awilix')
const JoiValidator = require('@hapi/joi')
const StartUp = require(join(__dirname, './startup'))
const Server = require(join(__dirname, './server'))
const RoutesApi = require(join(__dirname, './routes'))
const Config = require(join(__dirname, '../config/env'))
const DB = require(join(__dirname, '../database/models'))
const container = createContainer()

/* -----------------------------------------------------*/
/* Helpers:																							*/
/*------------------------------------------------------*/
const { StringHelper, EncryptionHelper } = require(join(
	__dirname,
	'../helpers'
))

/* -----------------------------------------------------*/
/* Routes: 																							*/
/* -----------------------------------------------------*/

const AuthRoutes = require(join(__dirname, './routes/auth.routes'))
const UsersRoutes = require(join(__dirname, './routes/users.routes'))

/* -----------------------------------------------------*/
/* Middlewares: 																				*/
/*------------------------------------------------------*/
const { AuthMiddleware, ErrorHandleMiddleware } = require(join(
	__dirname,
	'./middlewares'
))

/* -----------------------------------------------------*/
/* Requests: 																						*/
/*------------------------------------------------------*/
const { AuthRequest, UsersRequest } = require(join(
	__dirname,
	'./middlewares/requests'
))

/* -----------------------------------------------------*/
/* Auth:				 																				*/
/*------------------------------------------------------*/
const { UsersAuth, TokenAuth } = require(join(__dirname, './controllers/auth'))

/* -----------------------------------------------------*/
/* Controllers: 																				*/
/*------------------------------------------------------*/
const { UsersController } = require(join(__dirname, './controllers'))

/* -----------------------------------------------------*/
/* Repositories: 																				*/
/*------------------------------------------------------*/
const { TokenBlackListRepository, UsersRepository } = require(join(
	__dirname,
	'../database/repositories'
))

/* -----------------------------------------------------*/
/* DTOS: 																								*/
/*------------------------------------------------------*/
const { TokenBlackListDto, UsersDto } = require(join(__dirname, '../dto'))

/* -----------------------------------------------------*/
/* Services: 																						*/
/*------------------------------------------------------*/
const { JWTService, MailService } = require(join(__dirname, './services'))

/* -----------------------------------------------------*/
/* Strings: 																						*/
/*------------------------------------------------------*/
const { DoneString, ErrorString } = require(join(
	__dirname,
	'../helpers/strings'
))

/* -----------------------------------------------------*/
/* Registers for inyections:	 													*/
/*------------------------------------------------------*/
container

	/*
	 * System:
	 */
	.register({
		App: asClass(StartUp).singleton(),
		Server: asClass(Server).singleton(),
		Config: asValue(Config),
		DB: asValue(DB)
	})

	/*
	 * Routes:
	 */
	.register({
		RoutesApi: asFunction(RoutesApi).singleton()
	})
	// API
	.register({
		AuthRoutes: asFunction(AuthRoutes).singleton(),
		UsersRoutes: asFunction(UsersRoutes).singleton()
	})

	/*
	 * Helpers:
	 */
	.register({
		StringHelper: asClass(StringHelper).singleton(),
		EncryptionHelper: asClass(EncryptionHelper).singleton()
	})

	/*
	 * Strings:
	 */
	.register({
		DoneString: asClass(DoneString).singleton(),
		ErrorString: asClass(ErrorString).singleton()
	})

	/*
	 * Services:
	 */
	.register({
		MailService: asClass(MailService).singleton(),
		JWTService: asClass(JWTService).singleton()
	})

	/*
	 * Auth:
	 */
	.register({
		TokenAuth: asClass(TokenAuth).singleton(),
		UsersAuth: asClass(UsersAuth).singleton()
	})

	/*
	 * Controllers:
	 */
	.register({
		UsersController: asClass(UsersController).singleton()
	})

	/*
	 * Middlewares:
	 */
	.register({
		AuthMiddleware: asClass(AuthMiddleware).singleton(),
		ErrorHandleMiddleware: asClass(ErrorHandleMiddleware).singleton()
	})

	/*
	 * Requests:
	 */
	.register({
		JoiValidator: asValue(JoiValidator)
	})
	.register({
		AuthRequest: asClass(AuthRequest).singleton(),
		UsersRequest: asClass(UsersRequest).singleton()
	})

	/*
	 * Repositories:
	 */
	.register({
		TokenBlackListRepository: asClass(TokenBlackListRepository).singleton(),
		UsersRepository: asClass(UsersRepository).singleton()
	})

	/*
	 * DTOS:
	 */
	.register({
		TokenBlackListDto: asClass(TokenBlackListDto).singleton(),
		UsersDto: asClass(UsersDto).singleton()
	})

module.exports = container
