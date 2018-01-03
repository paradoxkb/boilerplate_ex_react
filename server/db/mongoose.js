/**
 * Created by watcher on 7/11/17.
 */
const mongoose = require('mongoose')
const CONSTANTS = require('../../config/constants_server')

const db = mongoose.connect(
	'mongodb://' + CONSTANTS.DB_USER + ':' + CONSTANTS.DB_PASSWORD + '@' + CONSTANTS.DB_HOST,
	{
		useMongoClient: true
	}
)

db.catch(err => {
	console.log('Error connected: ', err)
})

db.then(() => {
	console.log('Connected to db')
})
