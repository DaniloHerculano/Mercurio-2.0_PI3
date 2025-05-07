const { Pool } = require('pg');

const pool = new Pool({
  host: 'aws-0-sa-east-1.pooler.supabase.com',
  user: 'postgres.cahtamyswdujwrjlfkfg',         // usually PostgreSQL default user is 'postgres'
  password: 'Ferroviagravata12#',
  database: 'postgres',
  port: 6543,            // default port for PostgreSQL
  max: 10,               // maximum number of connections
  idleTimeoutMillis: 30000, // optional: how long a client is allowed to remain idle
});

module.exports = pool;