import { Router } from 'express';

export const createApiRoutes = () => {
    const router = Router();

    router.get('/', (req, res) => {
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

    return router;
};
