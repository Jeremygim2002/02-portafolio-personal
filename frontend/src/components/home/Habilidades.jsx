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

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">Error cargando habilidades</p>;

  return (
    <section
      ref={ref}
      id="habilidades"
      className="w-full bg-background py-24 text-center"
    >
      <LayoutWrapper>
        <Titulo subtitulo="Habilidades">Habilidades</Titulo>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-[50px] max-md:gap-[15px]">
            {tecnologias.map(({ id, slug, nombre }) => {
              const path = Object.keys(imagenes).find((key) =>
                key.includes(`/${slug}.`)
              );
              const src = path ? imagenes[path] : "/placeholder.svg";

              return (
                <div
                  key={id}
                  className="group flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src={src}
                    alt={nombre}
                    className="w-[80px] h-auto max-md:w-[45px] transition-transform duration-300 ease-in-out"
                  />
                  <span className="mt-1 text-sm max-md:text-xs text-contrast opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-default">
                    {nombre}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
