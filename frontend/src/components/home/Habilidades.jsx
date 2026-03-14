import { useRef } from "react";
import { obtenerTecnologias } from "@services/tecnologiaService";
import useGsapScrollFadeUp from "@hooks/useGsapScrollFadeUp";
import Titulo from "@components/common/Titulo";
import LayoutWrapper from "@components/common/LayoutWrapper";
import useFetch from "@hooks/useFetch";
import Loader from "@components/common/Loader";

const imagenes = import.meta.glob("/src/assets/img/tecnologias/*.{svg,png}", {
  eager: true,
  import: "default",
});

export default function Habilidades() {
  const ref = useRef();
  const { data: tecnologias, loading, error } = useFetch(obtenerTecnologias);

  useGsapScrollFadeUp(ref);

  // Función para determinar el origen de la imagen (S3 o Local)
  const getIconSrc = (slug) => {
    if (!slug) return "/placeholder.svg";
    
    // Si el slug es una URL (S3), retornarla directamente
    if (slug.startsWith("http")) return slug;

    // Si es un nombre de archivo, buscar en local
    const path = Object.keys(imagenes).find((key) =>
      key.includes(`/${slug}.`)
    );
    return path ? imagenes[path] : "/placeholder.svg";
  };

  if (loading) return <Loader />;
  if (error) return (
    <section id="habilidades" className="w-full bg-background py-24 text-center">
      <LayoutWrapper>
        <Titulo subtitulo="Habilidades">Habilidades</Titulo>
        <p className="text-red-400" role="alert">No se pudieron cargar las habilidades.</p>
      </LayoutWrapper>
    </section>
  );

  return (
    <section ref={ref} id="habilidades" className="w-full bg-background py-24 text-center cv-auto">
      <LayoutWrapper>
        <Titulo subtitulo="Habilidades">Habilidades</Titulo>
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-[50px] max-md:gap-[15px]">
            {tecnologias.map(({ id, slug, nombre }) => (
              <div key={id} className="group flex flex-col items-center transition-transform duration-300 hover:scale-110">
                <img
                  src={getIconSrc(slug)}
                  alt={nombre}
                  className="w-[80px] h-auto max-md:w-[45px]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="mt-1 text-sm max-md:text-xs text-contrast opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}