const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Alert = require('../models/Alert');
const Server = require('../models/Server');
const connection = new Sequelize(dbConfig);

Alert.init(connection);
Server.init(connection);

module.exports = connection;