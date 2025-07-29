export const validarParametros = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.params);
    if (!result.success) {
        return res.status(400).json({
            error: 'Parámetros inválidos',
            details: result.error.errors
        });
    }
    next();
};
