export default function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-background transition-all duration-500 ease-out" role="status" aria-live="polite" aria-busy="true">
      <div className="w-16 h-16 border-[6px] border-accent border-t-transparent rounded-full animate-spin" aria-hidden="true" />
      <span className="sr-only">Cargando…</span>
    </div>
  );
}
