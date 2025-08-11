import { useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import useGsapScrollFadeUp from "@hooks/useGsapScrollFadeUp";
import heroImage from "@assets/img/img_1.png";
import LayoutWrapper from "@components/common/LayoutWrapper";

export default function Inicio() {
  const textRef = useRef();
  const imageRef = useRef();

  useGsapScrollFadeUp(textRef, 0.1);
  useGsapScrollFadeUp(imageRef, 0.1);

  return (
    <section
      id="inicio"
      className="w-full bg-background flex items-center py-24 md:py-32"
    >
      <LayoutWrapper>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-12 items-center">
          <div
            ref={textRef}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            <h1 className="font-heading text-heading text-4xl md:text-5xl font-bold leading-tight mb-3">
              Jeremy Rosas
            </h1>
            <h2 className="font-heading text-heading text-2xl md:text-3xl font-semibold mb-5">
              Full Stack Developer
            </h2>
            <p className="text-texto-tercero text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl">
                🚀 Transformo ideas en experiencias digitales. Con una combinación
              de creatividad, estrategia y precisión técnica, desarrollo
              soluciones que no solo funcionan, sino que destacan. Siempre en
              busca de la próxima innovación.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="/cv.pdf"
                download="Jeremy-Rosas-CV.pdf"
                className="bg-accent text-contrast font-default font-medium text-sm tracking-wide px-7 py-3 rounded-full shadow-md hover:bg-accent/85 transition-all duration-300"
              >
                Descargar CV
              </a>
              <a
                href="https://www.linkedin.com/in/jeremy-rosas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-default hover:text-accent font-semibold text-xl flex items-center transition-all duration-300"
              >
                <BsLinkedin className="text-3xl text-accent mr-2" />
              </a>
            </div>
          </div>

          <div
            ref={imageRef}
            className="order-1 lg:order-2 flex justify-end items-center"
          >
            <img
              src={heroImage}
              alt="Jeremy Rosas"
              className="w-[90%] max-w-[350px] md:max-w-md h-auto animate-up-down"
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
