const express = require('express');
const AlertController = require('./controllers/AlertController');
const ServerController = require('./controllers/ServerController');

const routes = express.Router();

routes.get('/alerts', AlertController.index);
routes.post('/alerts', AlertController.store);
routes.get('/statics', ServerController.statics);

module.exports = routes;