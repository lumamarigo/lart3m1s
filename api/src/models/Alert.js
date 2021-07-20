const { Model, DataTypes } = require('sequelize');

class Alert extends Model {
    static init(sequelize){
        super.init({
            server_id: DataTypes.INTEGER,
            description: DataTypes.STRING
        }, {
            sequelize
        },)
    }

    static associate(models){
        this.belongsTo(models.Server, {foreignKey: "server_id", as: "server"});
    }
}

module.exports = Alert;