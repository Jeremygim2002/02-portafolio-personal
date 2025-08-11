import pool from '../config/db.js';
import { logger } from '../utils/logger.js';

export class ProyectoModel {
    static async findAllProjects() {
        try {
            const result = await pool.query(`
            SELECT p.id, p.nombre, tp.nombre AS "tipo proyecto",
                   (
                       SELECT ip.nombre_archivo
                       FROM imagen_proyecto ip
                       WHERE ip.id_proyecto = p.id
                       ORDER BY ip.id ASC
                       LIMIT 1
                   ) AS imagen_principal
            FROM proyecto p inner join tipo_proyecto tp on p.id_tipo = tp.id
            ORDER BY p.id;
        `);
            return result.rows;
        } catch (err) {
            logger.error({ msg: 'Error en ProyectoModel.findAllProjects', error: err });
            throw err;
        }
    }


    static async findProjectById(id) {
        try {
            const result = await pool.query(`
            SELECT 
              p.*,
              ARRAY(
                SELECT ip.nombre_archivo 
                FROM imagen_proyecto ip 
                WHERE ip.id_proyecto = p.id
                ORDER BY ip.id
              ) AS imagenes,
              ARRAY_AGG(t.nombre) AS tecnologias
            FROM proyecto p
            LEFT JOIN proyecto_tecnologia pt ON pt.id_proyecto = p.id
            LEFT JOIN tecnologia t ON t.id = pt.id_tecnologia
            WHERE p.id = $1
            GROUP BY p.id;
        `, [id]);

            const proyecto = result.rows[0];
            return proyecto ?? null;

        } catch (err) {
            logger.error({ msg: 'Error en ProyectoModel.findProjectById', error: err });
            throw err;
        }
    }


}