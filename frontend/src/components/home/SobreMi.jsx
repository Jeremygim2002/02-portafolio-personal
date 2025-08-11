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
      className="w-full bg-background py-24 text-center"
    >
      <LayoutWrapper>
        <Titulo subtitulo="Sobre mi">Sobre mi</Titulo>
        <div className="mx-auto mt-8">
          <p className="font-default text-texto-tercero text-lg leading-relaxed mb-8">
             ¡Soy Jeremy! 🚀 un apasionado del desarrollo full stack y estudiante
            de Ingeniería de Sistemas, especializado en la creación de
            aplicaciones web eficientes y escalables. Me motiva la resolución de
            problemas y la optimización de procesos, siempre explorando nuevas
            tecnologías para mejorar cada proyecto. Cuando no estoy programando,
            disfruto correr con mi mascota y mantenerme al día con las últimas
            tendencias tecnológicas.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
