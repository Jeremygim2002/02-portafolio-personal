import { Router } from 'express';
import { ProyectoController } from '../controllers/proyectoController.js';

export const createProyectoRoutes = ({ proyectoModel }) => {
    const router = Router();
    const proyectoController = new ProyectoController({ proyectoModel });

    router.get('/', proyectoController.getAll);
    router.get('/:id', proyectoController.getById);

    return router;
}
