import { Link } from 'react-router-dom';
import SelectorCantidad from '../components/SelectorCantidad';
import { useInventario } from '../context/InventarioContext';
import { formatearPrecio } from '../utils/formato';

// Carrito: al aumentar o disminuir cantidades se actualiza el inventario
export default function Carrito() {
  const { itemsCarrito, totalPagar, aumentarCantidad, disminuirCantidad, quitarDelCarrito } = useInventario();

  if (itemsCarrito.length === 0) {
    return (
      <div className="space-y-2">
        <h1 className="titulo-pagina">Carrito de compras</h1>
        <p>Tu carrito está vacío. <Link to="/articulos" className="text-brand-600 underline">Ver artículos</Link></p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="titulo-pagina">Carrito de compras</h1>

      <ul className="space-y-3">
        {itemsCarrito.map((item) => (
          <li key={item.id} className="tarjeta flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold">{item.nombre}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatearPrecio(item.precio)} c/u · Stock restante: {item.stock}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SelectorCantidad
                cantidad={item.cantidad}
                onAumentar={() => aumentarCantidad(item.id)}
                onDisminuir={() => disminuirCantidad(item.id)}
                puedeAumentar={item.stock > 0}
              />
              <span className="w-20 text-right font-bold">{formatearPrecio(item.precio * item.cantidad)}</span>
              <button type="button" onClick={() => quitarDelCarrito(item.id)} className="text-sm text-red-600 hover:underline">
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-right text-xl font-bold">Total: {formatearPrecio(totalPagar)}</p>
    </div>
  );
}
