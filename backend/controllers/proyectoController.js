export class ProyectoController {
    constructor({ proyectoModel }) {
        this.proyectoModel = proyectoModel;
    }

    findAllProjects = async (req, res, next) => {
        try {
            const proyectos = await this.proyectoModel.findAllProjects()
            res.json(proyectos)
        } catch (error) {
            next(error)
        }
    }

    findProjectById = async (req, res, next) => {
        const { id } = req.params
        try {
            const proyecto = await this.proyectoModel.findProjectById(id)
            if (proyecto) {
                res.json(proyecto)
            } else {
                res.status(404).json({ error: 'Proyecto no encontrado' })
            }
        } catch (error) {
            next(error)
        }
    }
}