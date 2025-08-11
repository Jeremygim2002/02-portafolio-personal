const API_URL = import.meta.env.VITE_API_URL + '/api/tecnologias';

export async function obtenerTecnologias() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw new Error('Error al obtener tecnologías');
  return res.json();
}
