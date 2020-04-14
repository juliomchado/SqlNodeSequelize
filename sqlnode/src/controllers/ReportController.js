const { Op } = require('sequelize')
const User = require('../models/User')


module.exports = {
    async show(req, res) {
        // Encontrar todos os usuários que tem email que termina @email.com.br
        // Desse usuários eu quero buscar todos que moram na rua "seiLa"

        // Não é um filtro
        // Desses usuários eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%email.com.br'
                }
            },
            include: [
                {
                    association: 'addresses',
                    where: { street: 'seiLa' }
                }, //Endereços
                {
                    association: 'techs',
                    // Retorna msm se não tiver o react, no caso só não mostra o react
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }, //Tecnologias
            ]
        })

        return res.json(users);
    }
}