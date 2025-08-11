import DescripcionProyecto from "@components/detalleProyecto/descripcionProyecto.jsx";
import RutaActual from "@components/detalleProyecto/rutaActual.jsx";

const PaginaDetalleProyecto = () => {
  return (
    <main id="main" className="min-h-screen w-full overflow-x-hidden">
      <RutaActual />
        <DescripcionProyecto />
    </main>
  );
};

export default PaginaDetalleProyecto;

