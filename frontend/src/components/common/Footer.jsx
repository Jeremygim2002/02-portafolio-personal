import { useRef } from "react";
import useGsapScrollFadeUp from "@hooks/useGsapScrollFadeUp";
import { BsLinkedin, BsGithub, BsWhatsapp, BsEnvelope } from "react-icons/bs";
import logo from "@assets/img/logo.jpg";
import LayoutWrapper from "@components/common/LayoutWrapper";

export default function Footer() {
  const ref = useRef();
  useGsapScrollFadeUp(ref);

  return (
    <footer
      id="footer"
      ref={ref}
      className="bg-background text-default text-center py-10"
    >
      <LayoutWrapper>
        <div className="flex flex-col items-center justify-center">
          <img
            src={logo}
            alt="Logo del portafolio"
            className="w-20 h-20 rounded-full p-[3px] transition-transform duration-300 hover:scale-110 mb-5"
          />
          <p className="text-contrast text-lg font-default px-4 mb-5 leading-relaxed">
            Aprendo y creo todos los días.
            <br />
            Creemos un proyecto juntos.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/jeremy-rosas/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/Jeremygim2002"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <BsGithub />
            </a>

            <a
              href="https://wa.me/928786676?text=Si puedes imaginarlo, puedes programarlo."
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <BsWhatsapp />
            </a>

            <a href="mailto:jremygim.2002@gmail.com" className="icon-btn">
              <BsEnvelope />
            </a>
          </div>

          <div className="text-sm text-texto-secundario mt-2">
            Creado por @jremygim &#169;
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
}
