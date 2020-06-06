'use strict'
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

class MailService {
	#logo = 'https://i.ibb.co/g9MzKwb/PSP-COMPLETO-ADMIN-1024-X-1440.png'
	#config = {}

	constructor({ Config }) {
		this.#config = Config
	}

	async send(emailOptios) {
		try {
			const transporter = nodemailer.createTransport({
				host: this.#config.MAIL.HOST,
				port: parseInt(this.#config.MAIL.PORT),
				secure: this.#config.MAIL.SECURE == 'false' ? false : true,
				auth: {
					user: this.#config.MAIL.USER,
					pass: this.#config.MAIL.PASSWORD
				},
				tls: {
					rejectUnauthorized: this.#config.MAIL.TLS == 'false' ? false : true
				}
			})

			const handlebarOptions = {
				viewEngine: {
					extName: '.hbs',
					partialsDir: 'views/layouts/partials',
					layoutsDir: 'views/templates',
					defaultLayout: 'main.hbs'
				},
				viewPath: 'views/templates',
				extName: '.hbs'
			}

			// Templates Engine
			transporter.use('compile', hbs(handlebarOptions))
			emailOptios.context.logo = this.#logo
			await transporter.sendMail(emailOptios)

			return true
		} catch (error) {
			return false
		}
	}
}
module.exports = MailService
