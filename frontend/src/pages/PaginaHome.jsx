import { useEffect, useState } from "react";
import Inicio from "@components/home/Inicio";
import SobreMi from "@components/home/SobreMi";
import Habilidades from "@components/home/Habilidades";
import Proyectos from "@components/home/Proyectos";
import useHashScroll from "@hooks/useHashScroll";
import Loader from "@components/common/Loader";

const PaginaHome = () => {
  useHashScroll();

  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setCargando(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (cargando) return <Loader />;

  return (
    <main id="main" className="min-h-screen w-full overflow-x-hidden">
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Proyectos />
    </main>
  );
};

export default PaginaHome;
