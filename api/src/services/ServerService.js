const Server = require('../models/Server');
const sequelize = require('sequelize');

module.exports = {
    async findServerByName (name){
        try{
        return await Server.findOne({
            where: {
              name: name
            }
        });
    }catch{
        return;
    }
    },
    async createServer(server){
        return await Server.create(server);
    },
    async statics(){
        return await Server.findAll({
            attributes: [
                'id',
                'name',
                'type',
                [sequelize.literal('(SELECT COUNT(*) FROM Alerts WHERE Alerts.server_id = id)'), 'alertscount']
            ],
            order: [[sequelize.literal('alertscount'), 'DESC']],
            limit: 3
        })
    }
}