const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lartemis', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;