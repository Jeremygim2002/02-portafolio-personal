import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProyectoPorId } from "@services/proyectoService";
import LayoutWrapper from "@components/common/LayoutWrapper";

export default function RutaActual() {
  const location = useLocation();
  const { id } = useParams();
  const [nombreProyecto, setNombreProyecto] = useState("");
  const rutas = location.pathname.split("/").filter(Boolean);

  useEffect(() => {
    const fetchNombre = async () => {
      if (id) {
        try {
          const proyecto = await obtenerProyectoPorId(id);
          setNombreProyecto(proyecto?.nombre || "");
        } catch (err) {
          console.error("Error al obtener proyecto:", err);
        }
      }
    };

    fetchNombre();
  }, [id]);

  const formatoRuta = (slug) =>
    slug.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

return (
  <div className="bg-background text-default pt-30">
    <LayoutWrapper>
      <nav className="breadcrumbs">
        <ol className="flex flex-wrap text-sm font-normal items-center gap-2">
          <li>
            <Link to="/" className="hover:text-accent text-heading">
              Home
            </Link>
          </li>
          {nombreProyecto ? (
            <li className="current">/ {nombreProyecto}</li>
          ) : (
            rutas
              .filter((ruta) => ruta !== "proyecto")
              .map((ruta, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-heading">/</span>
                  <span className="current">{formatoRuta(ruta)}</span>
                </li>
              ))
          )}
        </ol>
      </nav>
    </LayoutWrapper>
  </div>
);

}
