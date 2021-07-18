const express = require('express');
const AlertController = require('./controllers/AlertController');

const routes = express.Router();

routes.get('/alerts', AlertController.index);
routes.post('/alerts', AlertController.store);

module.exports = routes;