const mongoose = require('mongoose');

const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI || 'mongodb://127.0.0.1:27017/cyberscript');
// connecting to db - when we change the name, change url here as well

module.exports = mongoose.connection;
