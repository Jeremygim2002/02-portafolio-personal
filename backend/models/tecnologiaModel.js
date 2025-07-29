import pool from '../config/db.js';
import { logger } from '../utils/logger.js';

export class TecnologiaModel {
    static async findAllTechnologies() {
        try {
            const result = await pool.query('SELECT * FROM tecnologia');
            return result.rows;
        } catch (err) {
            logger.error({ msg: 'Error en TecnologiaModel.findAllTechnologies', error: err });
            throw err;
        }
    }
}