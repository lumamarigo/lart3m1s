const Alert = require('../models/Alert');
const AlertService = require('../services/AlertService');

module.exports ={
    async index(req, res){
        return res.json(await AlertService.search(''));
    },

    async store(req, res){
        const {server, description, server_type} = req.body;

        const alert = await AlertService.create({
            server, description, server_type
        });

        return res.json(alert);
    }
}