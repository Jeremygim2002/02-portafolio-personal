export class ProyectoController {
    constructor({ proyectoModel }) {
        this.proyectoModel = proyectoModel;
    }

    getAll = async (req, res) => {
        try {
            const proyectos = await this.proyectoModel.getAll();
            res.json(proyectos);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener proyectos' });
        }
    }

    getById = async (req, res) => {
        const { id } = req.params;
        try {
            const proyecto = await this.proyectoModel.getById(id);
            if (proyecto) {
                res.json(proyecto);
            } else {
                res.status(404).json({ error: 'Proyecto no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el proyecto' });
        }
    }
}