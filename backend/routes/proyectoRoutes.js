import { Router } from 'express';
import { ProyectoController } from '../controllers/proyectoController.js';
import { validarParametros } from '../middlewares/validarParametros.js';
import { idParametrosSchema } from '../schemas/proyectoSchema.js';

export const createProyectoRoutes = ({ proyectoModel }) => {
    const router = Router();
    const proyectoController = new ProyectoController({ proyectoModel });

    router.get('/', proyectoController.findAllProjects);
    router.get('/:id', validarParametros(idParametrosSchema), proyectoController.findProjectById);
    return router;
};
