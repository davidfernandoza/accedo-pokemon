'use strict'
// Requiere package:
const fs = require('fs')
const path = require('path')
const ignore = 'middleware.js'
let fileName = ''

const files = fs.readdirSync(__dirname).filter(file => {
	if (file != ignore) {
		return file.indexOf('.') !== 0 && file.slice(-3) === '.js'
	}
	return false
})

files.forEach(file => {
	fileName = path.basename(file, '.js')
	if (fileName !== 'index') {
		let className = require('./' + fileName)
		exports[className.name] = className
	}
})
