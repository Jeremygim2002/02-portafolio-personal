import { z } from 'zod';

export const idParametrosSchema = z.object({
    id: z.string().regex(/^\d+$/, { message: 'El id debe ser un número entero válido' })
});
