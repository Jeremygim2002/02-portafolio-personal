export default function FiltroTabs({ filtros, valorActual, setValorActual }) {
  return (
    <ul className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-semibold uppercase">
      {filtros.map(({ label, value }) => (
        <li
          key={value}
          className={`cursor-pointer px-3 py-1 transition-colors duration-300 rounded-md hover:text-accent ${
            valorActual === value ? "text-accent" : "text-default"
          }`}
          onClick={() => setValorActual(value)}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}
