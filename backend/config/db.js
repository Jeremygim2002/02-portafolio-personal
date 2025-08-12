import { Pool } from 'pg';
import dotenv from 'dotenv';
import { logger } from '../utils/logger.js';

dotenv.config();

const pool = new Pool(
  process.env.NODE_ENV === 'production'
    ? {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    }
    : {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    }
);

pool.on('connect', () => {
  logger.info(
    `Conectado a PostgreSQL correctamente en modo ${process.env.NODE_ENV}`
  );
});

pool.on('error', (err) => {
  logger.error('Error al conectar a PostgreSQL', err.message);
});

export default pool;
