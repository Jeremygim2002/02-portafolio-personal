import { Pool } from 'pg';
import dotenv from 'dotenv';
import { logger } from '../utils/logger.js';
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
    logger.info('Conectado a postgresSQL correctamente');
});

pool.on('error', (err) => {
    logger.error('error al conectar a postgresSQL', err.message);
});

export default pool;