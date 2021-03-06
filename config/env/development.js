'use strict'

module.exports = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	APP_NAME: process.env.APP_NAME,
	CSRF_TOKEN: process.env.CSRF_TOKEN,
	DOMAIN: process.env.DOMAIN,
	BASE_URL: process.env.BASE_URL,
	BASE_API: process.env.BASE_API,
	ENCRYPTION_KEY_TOKEN: process.env.ENCRYPTION_KEY_TOKEN,
	ENCRYPTION_SALT: process.env.ENCRYPTION_SALT,
	TOKEN_TIME_MINUTES: process.env.TOKEN_TIME_MINUTES,

	DB: {
		username: process.env.DB_USER_DEV,
		password: process.env.DB_PASS_DEV,
		database: process.env.DB_DATABASE_DEV,
		host: process.env.DB_HOST_DEV,
		dialect: process.env.DB_DIAL_DEV
	}
}
