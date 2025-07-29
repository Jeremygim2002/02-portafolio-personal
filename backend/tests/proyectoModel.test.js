import { describe, it, expect, vi, beforeAll } from 'vitest'
import { ProyectoModel } from '../models/proyectoModel.js'
import pool from '../config/db.js'

vi.mock('../config/db.js', () => ({
  default: {
    query: vi.fn()
  }
}))

describe('ProyectoModel', () => {
  it('findAllProjects retorna lista de proyectos con imagen principal', async () => {
    pool.query.mockResolvedValueOnce({
      rows: [
        { id: 1, nombre: 'Proyecto 1', imagen_principal: 'img1.jpg' },
        { id: 2, nombre: 'Proyecto 2', imagen_principal: 'img2.jpg' }
      ]
    })

    const result = await ProyectoModel.findAllProjects()
    expect(result).toHaveLength(2)
    expect(result[0]).toHaveProperty('imagen_principal')
  })

  it('findProjectById retorna un proyecto con imágenes y tecnologías', async () => {
    pool.query.mockResolvedValueOnce({
      rows: [
        {
          id: 1,
          nombre: 'Proyecto 1',
          imagenes: ['img1.jpg', 'img2.jpg'],
          tecnologias: ['React', 'Node']
        }
      ]
    })

    const result = await ProyectoModel.findProjectById(1)
    expect(result).not.toBeNull()
    expect(result.tecnologias).toContain('React')
  })

  it('findAllProjects lanza error si falla la consulta', async () => {
    pool.query.mockRejectedValueOnce(new Error('DB Error'))

    await expect(ProyectoModel.findAllProjects()).rejects.toThrow('DB Error')
  })
})
