const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Alert = require('../models/Alert');
const connection = new Sequelize(dbConfig);

Alert.init(connection);

module.exports = connection;