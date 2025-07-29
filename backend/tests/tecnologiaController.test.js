import { describe, it, expect, vi } from 'vitest'
import { TecnologiaController } from '../controllers/tecnologiaController.js'

describe('TecnologiaController', () => {
    const fakeModel = {
        findAllTechnologies: vi.fn().mockResolvedValue([
            { id: 1, nombre: 'React' },
            { id: 2, nombre: 'Node.js' }
        ])
    }

    const controller = new TecnologiaController({ tecnologiaModel: fakeModel })

    const createRes = () => {
        const res = {}
        res.json = vi.fn().mockReturnValue(res)
        res.status = vi.fn().mockReturnValue(res)
        return res
    }

    it('findAllTechnologies responde con lista de tecnologías', async () => {
        const req = {}
        const res = createRes()

        await controller.findAllTechnologies(req, res)

        expect(res.json).toHaveBeenCalledWith([
            { id: 1, nombre: 'React' },
            { id: 2, nombre: 'Node.js' }
        ])
    })

    it('findAllTechnologies maneja errores correctamente', async () => {
        const errorModel = {
            findAllTechnologies: vi.fn().mockRejectedValue(new Error('DB Error'))
        }

        const controllerError = new TecnologiaController({ tecnologiaModel: errorModel })
        const req = {}
        const res = createRes()
        const next = vi.fn()  

        await controllerError.findAllTechnologies(req, res, next)

        expect(next).toHaveBeenCalled()
        expect(next.mock.calls[0][0].message).toBe('DB Error')
    })
})


