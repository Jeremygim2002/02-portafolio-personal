import Inicio from "@components/home/Inicio";
import SobreMi from "@components/home/SobreMi";
import Habilidades from "@components/home/Habilidades";
import Proyectos from "@components/home/Proyectos";
import useHashScroll from "@hooks/useHashScroll";

const PaginaHome = () => {
  useHashScroll();

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
