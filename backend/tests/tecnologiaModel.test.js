import { describe, it, expect, vi } from 'vitest'
import { TecnologiaModel } from '../models/tecnologiaModel.js'
import pool from '../config/db.js'

vi.mock('../config/db.js', () => ({
  default: {
    query: vi.fn()
  }
}))

describe('TecnologiaModel', () => {
  it('findAllTechnologies retorna lista de tecnologías', async () => {
    pool.query.mockResolvedValueOnce({
      rows: [
        { id: 1, nombre: 'React', slug: 'react', color_hex: '#61DBFB' },
        { id: 2, nombre: 'Node.js', slug: 'node', color_hex: '#68A063' }
      ]
    })

    const result = await TecnologiaModel.findAllTechnologies()
    expect(result).toHaveLength(2)
    expect(result[0]).toHaveProperty('nombre', 'React')
  })

  it('findAllTechnologies retorna array vacío si no hay datos', async () => {
    pool.query.mockResolvedValueOnce({ rows: [] })

    const result = await TecnologiaModel.findAllTechnologies()
    expect(result).toEqual([])
  })

  it('findAllTechnologies lanza error si falla la consulta', async () => {
    pool.query.mockRejectedValueOnce(new Error('DB Error'))

    await expect(TecnologiaModel.findAllTechnologies()).rejects.toThrow('DB Error')
  })
})
