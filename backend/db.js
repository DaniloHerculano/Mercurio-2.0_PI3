const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'http://sql10.freesqldatabase.com/',
  user: 'sql10772938',
  password: 'q4SthhPgG3',
  database: 'sql10772938',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;