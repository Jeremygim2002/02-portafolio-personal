import { describe, it, expect, vi } from 'vitest'
import { ProyectoController } from '../controllers/proyectoController.js'

describe('ProyectoController', () => {
    const fakeModel = {
        findAllProjects: vi.fn().mockResolvedValue([{ id: 1, nombre: 'Proyecto Test' }]),
        findProjectById: vi.fn().mockResolvedValue({ id: 1, nombre: 'Proyecto Test' })
    }

    const controller = new ProyectoController({ proyectoModel: fakeModel })

    const createRes = () => {
        const res = {}
        res.json = vi.fn().mockReturnValue(res)
        res.status = vi.fn().mockReturnValue(res)
        return res
    }

    it('findAllProjects responde con proyectos', async () => {
        const req = {}
        const res = createRes()

        await controller.findAllProjects(req, res)
        expect(res.json).toHaveBeenCalledWith([{ id: 1, nombre: 'Proyecto Test' }])
    })

    it('findProjectById responde con un proyecto si existe', async () => {
        const req = { params: { id: 1 } }
        const res = createRes()

        await controller.findProjectById(req, res)
        expect(res.json).toHaveBeenCalledWith({ id: 1, nombre: 'Proyecto Test' })
    })

    it('findProjectById responde 404 si no encuentra proyecto', async () => {
        fakeModel.findProjectById.mockResolvedValueOnce(null)
        const req = { params: { id: 999 } }
        const res = createRes()

        await controller.findProjectById(req, res)
        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith({ error: 'Proyecto no encontrado' })
    })



    it('findAllProjects maneja errores correctamente', async () => {
        const errorModel = {
            findAllProjects: vi.fn().mockRejectedValue(new Error('DB Error'))
        }

        const controllerError = new ProyectoController({ proyectoModel: errorModel })
        const req = {}
        const res = createRes()
        const next = vi.fn()

        await controllerError.findAllProjects(req, res, next)

        expect(next).toHaveBeenCalled()
        expect(next.mock.calls[0][0].message).toBe('DB Error')
    })
})
