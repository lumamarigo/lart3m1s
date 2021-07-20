const Server = require('../models/Server');

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
    }
}