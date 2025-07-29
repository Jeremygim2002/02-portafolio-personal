import dotenv from 'dotenv';
import { logger } from './utils/logger.js';
dotenv.config();

import { createApp } from './createApp.js';

import { ProyectoModel } from './models/proyectoModel.js';
import { TecnologiaModel } from './models/tecnologiaModel.js';

const PORT = Number(process.env.PORT) || 3000;

const app = createApp({
    proyectoModel: ProyectoModel,
    tecnologiaModel: TecnologiaModel
});

app.listen(PORT, () => {
    logger.info(`Servidor corriendo en http://localhost:${PORT}`);
});