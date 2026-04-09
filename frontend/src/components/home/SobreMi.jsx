import { useRef } from "react";
import useGsapScrollFadeUp from "@hooks/useGsapScrollFadeUp";
import Titulo from "@components/common/Titulo";
import LayoutWrapper from "@components/common/LayoutWrapper";

export default function SobreMi() {
  const ref = useRef();
  useGsapScrollFadeUp(ref);

  return (
    <section
      ref={ref}
      id="sobre"
      className="w-full bg-background py-24 text-center cv-auto"
    >
      <LayoutWrapper>
        <Titulo subtitulo="Sobre mi">Sobre mi</Titulo>
        <div className="mx-auto mt-8">
          <p className="font-default text-texto-tercero text-lg leading-relaxed mb-8">
Soy estudiante de séptimo ciclo de Ingeniería de Sistemas con experiencia en la construcción de soluciones de software a medida y la gestión de infraestructura tecnológica. Mi enfoque profesional combina el desarrollo de aplicaciones robustas con el análisis avanzado de datos para potenciar la toma de decisiones empresariales.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
