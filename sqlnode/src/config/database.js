// Exporta objeto de configurações da base de dados
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'julio123',
    database: 'sqlnode',
    define: {
        // Vai definir que toda tabela do meu banco vai ter um banco created_at, updated_at (armazena a data que o registro foi criado e a data que o registro foi atualizado pela ultima vez)
        timestamps: true,
        // Define que os nomes das tabelas e colunas sejam em snake_case
        underscored: true,
    }

}



