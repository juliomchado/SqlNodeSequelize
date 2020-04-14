const { Model, DataTypes } = require('sequelize')


class Address extends Model {
    static init(connection) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        // pertence a model.User, {a chave estrangeira que faz o relacionamento}, as chamo o relacionamento como: 
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }

}

module.exports = Address;