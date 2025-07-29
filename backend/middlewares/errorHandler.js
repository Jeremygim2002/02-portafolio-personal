import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
    logger.error({
        msg: 'Error no controlado',
        error: err.message,
        stack: err.stack
    });

    res.status(500).json({
        error: 'Error interno del servidor',
        message: err.message
    });
};
