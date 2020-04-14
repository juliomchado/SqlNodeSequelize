const { Model, DataTypes } = require('sequelize')

class User extends Model {
    // Connecta com o banco e passa as configurações dos dados, nesse caso o usuario tem email e nome
    //  Não precisa do id nem dos timestamps pois já estão configurados como automatico
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            // Conexão com o banco de dados
            sequelize: connection
        })
    }

    static associate(models){
        // Nesse caso não é a coluna que está armazenada dentro do user, mas sim a coluna que está armazenada dentro do address 
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'})
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'})
    }

}

module.exports = User;


