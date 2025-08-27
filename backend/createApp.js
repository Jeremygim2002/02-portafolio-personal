import express from 'express';
import { corsMiddleware } from './middlewares/cors.js';
import compression from 'compression';

import { createProyectoRoutes } from './routes/proyectoRoutes.js';
import { createTecnologiaRoutes } from './routes/tecnologiaRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js';

export const createApp = ({ proyectoModel, tecnologiaModel }) => {
    const app = express();
    
    app.disable('x-powered-by');
    app.use(corsMiddleware);
    
    app.use(compression());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({
            message: 'API Portafolio Jeremy Rosas',
            version: '1.0.0',
            endpoints: {
                proyectos: '/api/proyectos',
                tecnologias: '/api/tecnologias'
            },
            status: 'online'
        });
    });

    app.use('/api/proyectos', createProyectoRoutes({ proyectoModel }));
    app.use('/api/tecnologias', createTecnologiaRoutes({ tecnologiaModel }));
    app.use((req, res, next) => {
        res.status(404).json({ error: 'Ruta no encontrada' });
    });

    app.use(errorHandler);

    return app;
}