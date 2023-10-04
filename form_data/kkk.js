const form = document.getElementById('form')

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 2222,
});

axios.get('https://api.example.com/data')
    .then(response => {
        const apiData = response.data;
        inserirDadosNoBanco(apiData);
    })
    .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
    });

    
async function inserirDadosNoBanco(data) {
    try {
        const query = 'INSERT INTO tabela (coluna1, coluna2, ...) VALUES ($1, $2, ...)';
        const values = [data.valor1, data.valor2];
        await db.none(query, values); // Use .query() no caso do node-postgres
        console.log('Dados inseridos com sucesso no banco de dados.');
    } catch (error) {
        console.error('Erro ao inserir dados no banco de dados:', error);
    }
}
