/* //ANTIGO (NAO ESTAVA ALOCADO NUM SERVIDOR)
const { Pool } = require('pg');

const pool = new Pool({
  host: 'aws-0-sa-east-1.pooler.supabase.com',
  user: 'postgres.cahtamyswdujwrjlfkfg',
  password: 'Ferroviagravata12#',
  database: 'postgres',
  port: 6543,
  max: 15,
  idleTimeoutMillis: 30000,
});

module.exports = pool; */

//NOVO - UTILIZANDO O RENDER 

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
  max: 15,
  idleTimeoutMillis: 30000,
});

module.exports = pool;
