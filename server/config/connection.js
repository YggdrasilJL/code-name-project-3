const mongoose = require('mongoose')

mongoose.connect(process.env.MONODB_URI || 'mongodb://127.0.0.1:27017/code-name-project-3')
// connecting to db - when we change the name, change url here as well

module.exports = mongoose.connection;