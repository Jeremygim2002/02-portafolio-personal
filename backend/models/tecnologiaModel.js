import pool from '../config/db.js';

export class TecnologiaModel {
    static async getAll() {
        try {
            const result = await pool.query('SELECT * FROM tecnologia');
            return result.rows;
        } catch (err) {
            console.error('Error en TecnologiaModel.getAll:', err.message);
            throw err;
        }
    }
}