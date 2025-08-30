import cors from 'cors';

const ACCEPTED_ORIGINS = new Set([
    'http://localhost:3000',
    'http://localhost:5173',
    'https://02-portafolio-personal-frontend.vercel.app/'
]);

export const corsMiddleware = cors({
    origin(origin, callback) {
        if (!origin || ACCEPTED_ORIGINS.has(origin)) {
            callback(null, true);
        } else {
            callback(new Error('violación de política CORS'), false);
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
});
