import { CATEGORIAS } from '../data/inventarioInicial';

// Botones para filtrar por categoría
export default function FiltroCategoria({ seleccionada, onCambiar }) {
  const opciones = ['Todas', ...CATEGORIAS];
  return (
    <div className="flex flex-wrap gap-2">
      {opciones.map((categoria) => (
        <button
          key={categoria}
          type="button"
          onClick={() => onCambiar(categoria)}
          className={`rounded-full border px-3 py-1 text-sm ${
            seleccionada === categoria
              ? 'border-brand-600 bg-brand-600 text-white'
              : 'border-gray-300 bg-white text-gray-700 hover:border-brand-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200'
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
