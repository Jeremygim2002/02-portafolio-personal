import { useState } from "react";
import Titulo from "@components/common/Titulo";
import LayoutWrapper from "@components/common/LayoutWrapper";
import Masonry from "react-masonry-css";
import { Suspense, lazy } from "react";
const Lightbox = lazy(() => import("yet-another-react-lightbox"));
import "yet-another-react-lightbox/styles.css";
import { BsLink45Deg, BsZoomIn } from "react-icons/bs";
import useFetch from "@hooks/useFetch";
import FiltroTabs from "@components/common/FiltroTabs";
import Loader from "@components/common/Loader";
import { useNavigate } from "react-router-dom";
import { obtenerProyectos } from "@services/proyectoService";

const imagenes = import.meta.glob(
  "/src/assets/img/portafolio/*.{jpg,jpeg,png,svg,webp}",
  { eager: true, import: "default" }
);

const filtros = [
  { label: "Todos", value: "*" },
  { label: "Full stack", value: "Full Stack" },
  { label: "Front end", value: "Front End" },
  { label: "Escritorio", value: "Escritorio" },
];

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

const getImageSrc = (fileName) => {
  if (!fileName) return "/placeholder.svg";
  const base = fileName.replace(/\.[^/.]+$/, "");
  const basePath = `/src/assets/img/portafolio/`;
  const exts = ["webp", "jpg", "jpeg", "png", "svg"];
  for (const ext of exts) {
    const key = `${basePath}${base}.${ext}`;
    if (imagenes[key]) return imagenes[key];
  }
  const ruta = Object.keys(imagenes).find((k) => k.includes(`/${base}.`));
  return ruta ? imagenes[ruta] : "/placeholder.svg";
};

export default function Proyectos() {
  const [filtro, setFiltro] = useState("*");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [cargandoDetalle, setCargandoDetalle] = useState(false);

  const navigate = useNavigate();
  const { data: proyectos, loading, error } = useFetch(obtenerProyectos);

  if (loading || cargandoDetalle) return <Loader />;
  if (error)
    return (
      <section
        id="proyectos"
        className="w-full bg-background py-24 text-center"
      >
        <LayoutWrapper>
          <Titulo subtitulo="Portafolio">Portafolio</Titulo>
          <p className="text-red-400" role="alert">
            No se pudieron cargar los proyectos. Intenta nuevamente más tarde.
          </p>
        </LayoutWrapper>
      </section>
    );

  const proyectosFiltrados =
    filtro === "*"
      ? proyectos
      : proyectos.filter((p) => p["tipo proyecto"] === filtro);

  return (
    <section
      id="proyectos"
      className="w-full bg-background py-24 text-center scroll-mt-24 cv-auto"
    >
      <LayoutWrapper>
        <div className="mb-12" data-aos="fade-up">
          <Titulo subtitulo="Portafolio">Portafolio</Titulo>
          <FiltroTabs
            filtros={filtros}
            valorActual={filtro}
            setValorActual={setFiltro}
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-6"
            columnClassName="flex flex-col gap-6"
          >
            {proyectosFiltrados.map(
              ({ id, nombre, imagen_principal }, index) => (
                <div
                  key={id}
                  className="bg-surface rounded-xl shadow-md overflow-hidden group animate-fadeIn"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={getImageSrc(imagen_principal)}
                      alt={nombre}
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      onClick={() => setLightboxIndex(index)}
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-surface/80 backdrop-blur-sm p-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 py-6">
                      <h4 className="text-heading font-bold text-base truncate">
                        {nombre}
                      </h4>
                      <div className="flex gap-4 text-xl">
                        <button
                          onClick={() => setLightboxIndex(index)}
                          className="hover:text-accent transition-colors duration-300"
                          title="Ver imagen"
                          aria-label={`Ampliar imagen de ${nombre}`}
                        >
                          <BsZoomIn />
                        </button>
                        <button
                          onClick={() => {
                            setCargandoDetalle(true);
                            setTimeout(() => navigate(`/proyecto/${id}`), 500);
                          }}
                          className="hover:text-accent transition-colors duration-300"
                          title="Ver proyecto"
                          aria-label={`Ir al detalle del proyecto ${nombre}`}
                        >
                          <BsLink45Deg />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Masonry>
        </div>
      </LayoutWrapper>

      <Suspense>
        {lightboxIndex >= 0 && (
          <Lightbox
            open
            index={lightboxIndex}
            close={() => setLightboxIndex(-1)}
            slides={proyectosFiltrados.map(({ imagen_principal }) => ({
              src: getImageSrc(imagen_principal),
            }))}
            plugins={[]}
          />
        )}
      </Suspense>
    </section>
  );
}
