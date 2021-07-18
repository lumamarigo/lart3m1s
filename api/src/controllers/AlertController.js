const Alert = require('../models/Alert');

module.exports ={
    async index(req, res){
        const alerts = await Alert.findAll();
        return res.json(alerts);
    },

    async store(req, res){
        const {server, description, server_type} = req.body;

        const alert = await Alert.create({
            server, description, server_type
        });

        return res.json(alert);
    }
}