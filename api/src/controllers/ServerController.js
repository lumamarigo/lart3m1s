const Server = require('../models/Server');
const ServerService = require('../services/ServerService');

module.exports ={
    async statics(req, res){
        const alert = await ServerService.statics();
        return res.json(alert);
    }
}