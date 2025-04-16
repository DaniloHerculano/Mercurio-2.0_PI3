const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'sql10.freesqldatabase.com', // Removi o http://
  user: 'sql10772938',
  password: 'q4SthhPgG3',
  database: 'sql10772938',
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 10000
});

// Testar a conexão ao iniciar
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    connection.release();
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1); // Encerra o aplicativo se não conseguir conectar
  }
}

testConnection();

module.exports = pool;
