import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL=postgresql:/postgres.cahtamyswdujwrjlfkfg:[Ferroviagravata12#]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
const sql = postgres(connectionString)

export default sql
const { Pool } = require('pg');

const pool = new Pool({
  host: 'aws-0-sa-east-1.pooler.supabase.com',
  user: 'postgres.cahtamyswdujwrjlfkfg',         // usually PostgreSQL default user is 'postgres'
  password: 'Ferroviagravata12#',
  database: 'postgres',
  port: 6543,            // default port for PostgreSQL
  max: 15,               // maximum number of connections
  idleTimeoutMillis: 30000, // optional: how long a client is allowed to remain idle
});

module.exports = pool;
