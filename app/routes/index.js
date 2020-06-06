'use strict'
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const { Router } = require('express')
require('express-async-errors')

module.exports = ({
	AuthRoutes,
	BasePartsRoutes,
	Config,
	DefectLogRoutes,
	EstimatesNewPartsRoutes,
	EstimatesRoutes,
	ExperiencesLanguagesRoutes,
	ExperiencesRoutes,
	ForgotPasswordRoutes,
	LanguagesRoutes,
	ModulesRoutes,
	NewPartsRoutes,
	OrganizationsRoutes,
	PipRoutes,
	ProgramsRoutes,
	ProjectsRoutes,
	ReusablePartsRoutes,
	StringHelper,
	TestReportsRoutes,
	TimeLogRoutes,
	UsersRoutes
}) => {
	const routers = Router()
	const apiRoute = Router()
	const app = StringHelper.capitalize(Config.APP_NAME)

	// Parsear la peticion
	apiRoute
		.use(cors())
		.use(helmet())
		.use(bodyParser.urlencoded({ extended: false }))
		.use(bodyParser.json())
		.use(compression())

	// registro de las rutas
	apiRoute.use('/auth', AuthRoutes)
	apiRoute.use('/base-parts', BasePartsRoutes)
	apiRoute.use('/defect-logs', DefectLogRoutes)
	apiRoute.use('/estimates-new-parts', EstimatesNewPartsRoutes)
	apiRoute.use('/estimates', EstimatesRoutes)
	apiRoute.use('/experiences-languages', ExperiencesLanguagesRoutes)
	apiRoute.use('/experiences', ExperiencesRoutes)
	apiRoute.use('/languages', LanguagesRoutes)
	apiRoute.use('/modules', ModulesRoutes)
	apiRoute.use('/new-parts', NewPartsRoutes)
	apiRoute.use('/organizations', OrganizationsRoutes)
	apiRoute.use('/pip', PipRoutes)
	apiRoute.use('/programs', ProgramsRoutes)
	apiRoute.use('/projects', ProjectsRoutes)
	apiRoute.use('/reusable-parts', ReusablePartsRoutes)
	apiRoute.use('/test-reports', TestReportsRoutes)
	apiRoute.use('/time-logs', TimeLogRoutes)
	apiRoute.use('/users', UsersRoutes)
	apiRoute.use('/forgot-password', ForgotPasswordRoutes)
	routers.use('/api', apiRoute)

	/* ----------------------------------------------------------------------	*/
	/* Por defercto 																													*/
	/* ----------------------------------------------------------------------	*/

	// Home WEB
	routers.use('/', (req, res, next) => {
		const urlArray = req.path.split('/')
		if (urlArray[1] == '') {
			return res.render('home', {
				title: 'Home',
				app: app.toUpperCase()
			})
		} else {
			next()
		}
	})

	// Not Found 404
	routers.use(req => {
		const urlArray = req.path.split('/')
		if (urlArray[1] != 'api') {
			throw new Error('404') // WEB
		} else {
			throw new Error('ERR404') // API
		}
	})

	return routers
}
