export class TecnologiaController {
    constructor({ tecnologiaModel }) {
        this.tecnologiaModel = tecnologiaModel
    }

    getAll = async (req, res) => {
        try {
            const tecnologia = await this.tecnologiaModel.getAll();
            res.json(tecnologia);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener tecnologias' });
        }
    }
}