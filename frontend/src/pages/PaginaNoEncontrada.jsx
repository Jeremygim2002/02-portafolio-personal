import { Link } from "react-router-dom";

export default function PaginaNoEncontrada() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6" role="alert">
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-heading to-accent animate-bounce mb-4">
        404
      </h1>
      <p className="text-lg text-texto-secundario mb-6">
        Oops... La página que buscas no existe.
      </p>
      <Link
        to="/"
        className="bg-accent text-contrast font-default font-medium text-sm tracking-wide px-7 py-3 rounded-full shadow-md hover:bg-accent/85 transition-all duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
