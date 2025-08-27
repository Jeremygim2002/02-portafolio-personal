import { useEffect, useMemo, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import useGsapScrollFadeUp from "@hooks/useGsapScrollFadeUp";
import heroImage from "@assets/img/img_1.webp";
// Buscar variantes responsivas si existen (ej: img_1-350.webp, img_1-700.webp, img_1-1200.webp)
const heroVariants = import.meta.glob("/src/assets/img/img_1-*.webp", { eager: true, import: "default" });
import LayoutWrapper from "@components/common/LayoutWrapper";

export default function Inicio() {
  const textRef = useRef();
  const imageRef = useRef();

  useGsapScrollFadeUp(textRef, 0.1);
  useGsapScrollFadeUp(imageRef, 0.1);

  // Construir srcSet a partir de las variantes disponibles
  const { srcSetStr, sizesStr } = useMemo(() => {
    const pairs = Object.entries(heroVariants)
      .map(([key, url]) => {
        const m = key.match(/img_1-(\d+)\.webp$/);
        return m ? { w: Number(m[1]), url } : null;
      })
      .filter(Boolean)
      .sort((a, b) => a.w - b.w);

    const srcSet = pairs.map((p) => `${p.url} ${p.w}w`).join(", ");
    const sizes = "(min-width: 1024px) 350px, (min-width: 768px) 320px, 90vw";
    return { srcSetStr: srcSet || undefined, sizesStr: sizes };
  }, []);

  
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroImage;
    if (srcSetStr) link.setAttribute("imagesrcset", srcSetStr);
    link.setAttribute("imagesizes", sizesStr);
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [srcSetStr, sizesStr]);

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
              width="700"
              height="700"
              fetchPriority="high"
              sizes={sizesStr}
              srcSet={srcSetStr}
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
