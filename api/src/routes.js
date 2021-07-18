const express = require('express');

const routes = express.Router();

routes.get('/', (req, res)=>{
    return res.json({ teste: 'lartemis' });
});

module.exports = routes;