import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.NODE_ENV === 'production'
});

pool.on('connect', () => {
    console.log('Conectado a postgresSQL correctamente ')
});

pool.on('error', (err) => {
    console.error('error al conectar a postgresSQL', err.message);
});

export default pool;
