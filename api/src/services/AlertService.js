const Alert = require('../models/Alert');
const Server = require('../models/Server');
const ServerService = require('../services/ServerService');
const sequelize = require('sequelize');

module.exports = {
    async findAll (){
        return await Alert.findAll();
    },
    async create(alert){
        let server = await ServerService.findServerByName(alert.server);

        if(!server){
           let newServer = {
               name: alert.server,
               type: alert.server_type
           };
           console.log(newServer);
           server = await ServerService.createServer(newServer);
        }
        const newAlert = {
            server_id: server.id,
            description: alert.description
        };
        return await Alert.create(newAlert);
      
    },
    async search(filter){
        return await Alert.findAll({
            where: {
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('description')), 'LIKE', '%' + filter + '%')
            },
            attributes: [
                'id',
                'description',
                'created_at',
                'updated_at',
                //tive que fazer assim pois o include não estava funcionando. preciso entender melhor como funciona.
                [sequelize.literal('(SELECT name FROM servers WHERE servers.id = server_id)'), 'server'],
                [sequelize.literal('(SELECT type FROM servers WHERE servers.id = server_id)'), 'server_type']
            ]
        })
    }
}