export default function Tarjeta({ title, children }) {
  return (
    <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-border uppercase tracking-wide text-heading">
        {title}
      </h3>
      {children}
    </div>
  );
}
