import { Router } from 'express';
import { TecnologiaController } from '../controllers/tecnologiaController.js';

export const createTecnologiaRoutes = ({ tecnologiaModel }) => {
    const router = Router();
    const tecnologiaController = new TecnologiaController({ tecnologiaModel });

    router.get('/', tecnologiaController.findAllTechnologies);

    return router;
}