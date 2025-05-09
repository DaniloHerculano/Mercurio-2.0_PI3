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

module.exports = pool;
