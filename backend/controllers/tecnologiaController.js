export class TecnologiaController {
    constructor({ tecnologiaModel }) {
        this.tecnologiaModel = tecnologiaModel
    }

    findAllTechnologies = async (req, res, next) => {
        try {
            const tecnologia = await this.tecnologiaModel.findAllTechnologies();
            res.json(tecnologia);
        } catch (error) {
            next(error);
        }
    }
}