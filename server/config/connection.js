const mongoose = require('mongoose');

let user = 'appuser';

let pass = 'Password1';

mongodbURI =
  `mongodb+srv://${user}:${pass}@mproject-3.pjp0lqq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongodbURI || 'mongodb://127.0.0.1:27017/cyberscript');
// connecting to db - when we change the name, change url here as well

module.exports = mongoose.connection;
