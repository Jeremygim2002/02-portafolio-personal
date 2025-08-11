export default function Titulo({ children, subtitulo }) {
  return (
    <div className="relative text-center py-8 mb-8" data-aos="fade-up">
      <span className="font-heading absolute top-1 left-0 right-0 text-heading/7 text-6xl sm:text-5xl uppercase font-bold z-0 leading-none">
        {subtitulo}
      </span>
      <h2 className="font-heading relative text-2xl sm:text-3xl font-bold uppercase text-heading z-10 mb-4">
        {children}
      </h2>
    </div>
  );
}
