import pool from '../config/db.js';

export class ProyectoModel {
    static async getAll() {
        try {
            const result = await pool.query('SELECT p.nombre, ip.nombre_archivo  FROM proyecto p inner join imagen_proyecto ip on ip.id_proyecto = p.id LIMIT 1');
            return result.rows;
        } catch (err) {
            console.error('Error en ProyectoModel.getall:', err.message);
            throw err;
        }
    }

    static async getById(id) {
        try {
            const proyectoResult = await pool.query('SELECT * FROM proyecto WHERE id = $1', [id]);
            const proyecto = proyectoResult.rows[0];
            if (!proyecto) return null;

            const imagenesResult = await pool.query(
                'SELECT nombre_archivo FROM imagen_proyecto WHERE id_proyecto = $1',
                [id]
            );

            const tecnologiasResult = await pool.query(
                `SELECT t.nombre
             FROM tecnologia t
             INNER JOIN proyecto_tecnologia pt ON t.id = pt.id_tecnologia
             WHERE pt.id_proyecto = $1`,
                [id]
            );

            return {
                ...proyecto,
                imagenes: imagenesResult.rows.map(row => row.nombre_archivo),
                tecnologias: tecnologiasResult.rows.map(row => row.nombre)
            };

        } catch (err) {
            console.error('Error en ProyectoModel.getById:', err.message);
            throw err;
        }
    }

}