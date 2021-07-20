const { Model, DataTypes } = require('sequelize');

class Server extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            type: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Alert, { as: "alerts", foreignKey: 'server_id'});
    }
}

module.exports = Server;