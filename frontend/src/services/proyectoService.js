const API_URL = import.meta.env.VITE_API_URL + '/api/proyectos';

export async function obtenerProyectos(opts = {}) {
  const res = await fetch(`${API_URL}`, { signal: opts.signal });
  if (!res.ok) throw new Error('Error al obtener proyectos');
  return res.json();
}

export async function obtenerProyectoPorId(id, opts = {}) {
  const res = await fetch(`${API_URL}/${id}`, { signal: opts.signal });
  if (!res.ok) throw new Error('Proyecto no encontrado');
  return res.json();
}
