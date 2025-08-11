const API_URL = import.meta.env.VITE_API_URL + '/api/proyectos';

export async function obtenerProyectos() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw new Error('Error al obtener proyectos');
  return res.json();
}

export async function obtenerProyectoPorId(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Proyecto no encontrado');
  return res.json();
}
