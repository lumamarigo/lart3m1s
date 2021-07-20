const Alert = require('../models/Alert');

module.exports = {
    async findAll (){
        return await Alert.findAll();
    },
    async create(alert){
        return await Alert.create(alert);
    }
}