import pino from 'pino';

// Detectamos si estamos en producción mediante la variable de entorno
const isProduction = process.env.NODE_ENV === 'production';

export const logger = pino({
  level: 'info',
  // Si es producción, no usamos transporte (JSON directo). 
  // Si es desarrollo, usamos pino-pretty para que tú veas colores en tu terminal.
  transport: isProduction 
    ? undefined 
    : {
        target: 'pino-pretty',
        options: {
          colorize: true
        }
      }
});