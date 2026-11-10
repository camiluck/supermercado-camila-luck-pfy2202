import { Link } from 'react-router-dom';
import { formatearPrecio } from '../utils/formato';

// Tarjeta de un artículo; al hacer clic va a su detalle
export default function ArticuloCard({ articulo }) {
  return (
    <Link to={`/articulos/${articulo.id}`} className="tarjeta block p-4 hover:shadow-md">
      <p className="text-xs uppercase text-gray-500 dark:text-gray-400">{articulo.categoria}</p>
      <h3 className="mt-1 font-semibold">{articulo.nombre}</h3>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold">{formatearPrecio(articulo.precio)}</span>
        <span className={`text-sm ${articulo.stock === 0 ? 'text-red-600' : 'text-gray-600 dark:text-gray-300'}`}>
          Stock: {articulo.stock}
        </span>
      </div>
    </Link>
  );
}
