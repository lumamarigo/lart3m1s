const { Model, DataTypes } = require('sequelize');

class Alert extends Model {
    static init(sequelize){
        super.init({
            server: DataTypes.STRING,
            description: DataTypes.STRING,
            server_type: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Alert;