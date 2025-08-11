export default function LayoutWrapper({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 md:px-12 lg:px-16">
      {children}
    </div>
  );
}
