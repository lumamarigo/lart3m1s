const Alert = require('../models/Alert');
const ServerService = require('../services/ServerService');

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
      
    }
}