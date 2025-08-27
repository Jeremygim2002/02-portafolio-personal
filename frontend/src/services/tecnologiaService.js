const API_URL = import.meta.env.VITE_API_URL + '/api/tecnologias';

export async function obtenerTecnologias(opts = {}) {
  const res = await fetch(`${API_URL}`, { signal: opts.signal });
  if (!res.ok) throw new Error('Error al obtener tecnologías');
  return res.json();
}
