// Botón reutilizable con dos variantes
const VARIANTES = {
  primario: 'bg-brand-600 text-white hover:bg-brand-700',
  secundario: 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100',
};

export default function Button({ variante = 'primario', className = '', children, ...props }) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-semibold disabled:opacity-50 ${VARIANTES[variante]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
