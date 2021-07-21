const Alert = require('../models/Alert');
const Server = require('../models/Server');
const ServerService = require('../services/ServerService');
const sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const seq = require('../database');

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
    async search(filtr){
        //tive que fazer assim pois o include não estava funcionando. preciso entender melhor como funciona.
        return await seq.query('SELECT ALERTS.id,'
        + 'ALERTS.description,'
        + 'ALERTS.created_at,'
        + 'ALERTS.updated_at,'
        + 'S.name AS server,'
        + 'S.TYPE AS server_type'
        + ' FROM ALERTS '
        + ' INNER JOIN SERVERS S ON S.ID = ALERTS.server_id'
        + ' WHERE LOWER(ALERTS.description) LIKE LOWER(:filter)'
        + ' or LOWER(S.name) LIKE LOWER(:filter)'
        + ' OR LOWER(S.type) LIKE LOWER(:filter)', 
        {
            replacements: { filter: '%'+filtr+'%' },
            type: QueryTypes.SELECT
          }
        );
    }
}