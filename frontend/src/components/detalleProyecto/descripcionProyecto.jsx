import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerProyectoPorId } from "@services/proyectoService";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LayoutWrapper from "@components/common/LayoutWrapper";
import useGsapScrollFadeUp from "@hooks/useGsapScrollFadeUp";
import Loader from "@components/common/Loader";
import Tarjeta from "@components/ui/Tarjeta";
import InfoItem from "@components/ui/InfoItem";

const imagenesPortafolio = import.meta.glob(
  "/src/assets/img/portafolio/*.{jpg,jpeg,png,svg,webp}",
  { eager: true, import: "default" }
);

export default function DescripcionProyecto() {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();
  const ref = useRef();

  useGsapScrollFadeUp(ref);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        setCargando(true);
        const data = await obtenerProyectoPorId(id);

        if (!data) {
          navigate("/404", { replace: true });
          return;
        }

        setProyecto(data);
      } catch (error) {
        console.error("Error al obtener el proyecto:", error);
        navigate("/404", { replace: true });
      } finally {
        setCargando(false);
      }
    };
    fetchProyecto();
  }, [id, navigate]);

  if (cargando) return <Loader />;

  return (
    <section
      ref={ref}
      id="portfolio-details"
      className="w-full bg-background py-24"
    >
      <LayoutWrapper>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000}
              showThumbs={false}
              showStatus={false}
              showArrows
              showIndicators
              stopOnHover
              swipeable
            >
              {proyecto.imagenes.map((img, idx) => {
                const path = Object.keys(imagenesPortafolio).find((key) =>
                  key.includes(img)
                );
                const src = path
                  ? imagenesPortafolio[path]
                  : "/placeholder.svg";

                return (
                  <div key={idx}>
                    <img
                      src={src}
                      alt={`Imagen ${idx + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-6">
            <Tarjeta title="Descripción">
              <p className="text-texto-secundario text-sm leading-relaxed">
                {proyecto.descripcion}
              </p>
            </Tarjeta>

            <Tarjeta title="Información">
              <ul className="text-sm space-y-2 text-texto-secundario">
                <InfoItem label="Nombre" value={proyecto.nombre} />
                <InfoItem label="Categoría" value={proyecto.categoria} />
                <InfoItem label="Duración" value={proyecto.duracion} />
                {proyecto.repositorio && (
                  <InfoItem
                    label="Repositorio"
                    value="Ver repositorio"
                    link={proyecto.repositorio}
                  />
                )}
                {proyecto.link && (
                  <InfoItem
                    label="Demo"
                    value="Ver demo"
                    link={proyecto.link}
                  />
                )}
              </ul>
            </Tarjeta>

            {proyecto.tecnologias?.length > 0 && (
              <Tarjeta title="Tecnologías">
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tec, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-accent text-white text-xs font-medium shadow-sm hover:scale-105 transition-transform duration-200"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </Tarjeta>
            )}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
