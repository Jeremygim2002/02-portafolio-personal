import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "@components/common/LayoutWrapper";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import { useNavigate } from "react-router-dom";
import useScrollTriggerState from "@hooks/useScrollTriggerState";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);
  const scrolled = useScrollTriggerState();

  const links = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/#sobre", label: "Sobre mi" },
    { href: "/#habilidades", label: "Habilidades" },
    { href: "/#proyectos", label: "Proyectos" },
  ];

  const isDetalle = location.pathname.startsWith("/proyecto");
  const footerLink = isDetalle ? "#footer" : "/#footer";

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    closeMenu();

    const targetId = href.replace("/#", "").replace("#", "");
    const el = document.getElementById(targetId);

    if (el) {
      gsap.to(window, {
        scrollTo: { y: el, offsetY: 100 },
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      navigate("/");
      setTimeout(() => {
        navigate(`/#${targetId}`, { replace: true });
      }, 50);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-[999] transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-background`}
    >
      <LayoutWrapper>
        <div className="py-5 md:py-6 flex justify-between items-center">
          <Link
            to="/"
            className="font-heading font-bold text-2xl md:text-3xl text-heading"
          >
            JR
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-nav text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <nav className="font-heading font-semibold hidden md:flex gap-8 text-nav items-center">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-nav-hover transition-colors"
                onClick={(e) => handleAnchorClick(e, href)}
              >
                {label}
              </a>
            ))}
            <a
              href={footerLink}
              onClick={(e) => handleAnchorClick(e, footerLink)}
              className="hidden md:inline-block bg-accent text-contrast px-6 py-2 rounded-full text-sm font-heading hover:bg-opacity-90 transition"
            >
              Contacto
            </a>
          </nav>
        </div>
      </LayoutWrapper>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background text-nav ${
          menuOpen ? "max-h-96 py-5" : "max-h-0"
        } px-6`}
      >
        <div className="flex flex-col gap-5">
          {[...links, { href: footerLink, label: "Contacto" }].map(
            ({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="py-3 w-full hover:text-nav-hover border-b border-surface"
              >
                {label}
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
}
