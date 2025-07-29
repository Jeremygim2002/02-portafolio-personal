import express from 'express';
import { corsMiddleware } from './middlewares/cors.js';

import { createProyectoRoutes } from './routes/proyectoRoutes.js';
import { createTecnologiaRoutes } from './routes/tecnologiaRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js';

export const createApp = ({ proyectoModel, tecnologiaModel }) => {
    const app = express();

    app.disable('x-powered-by');
    app.use(corsMiddleware);
    app.use(express.json());

    app.use('/api/proyectos', createProyectoRoutes({ proyectoModel }));
    app.use('/api/tecnologias', createTecnologiaRoutes({ tecnologiaModel }));
    app.use((req, res, next) => {
        res.status(404).json({ error: 'Ruta no encontrada' });
    });

    app.use(errorHandler);

    return app;
}