import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import SelectorCantidad from '../components/SelectorCantidad';
import { useInventario } from '../context/InventarioContext';
import { formatearPrecio } from '../utils/formato';

// Detalle de un artículo. El id viene de la URL (/articulos/:id)
export default function DetalleArticulo() {
  const { id } = useParams();
  const { inventario, agregarAlCarrito } = useInventario();
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');

  const articulo = inventario.find((a) => a.id === Number(id));

  if (!articulo) {
    return <p>Artículo no encontrado. <Link to="/articulos" className="text-brand-600 underline">Volver</Link></p>;
  }

  const handleAgregar = () => {
    agregarAlCarrito(articulo.id, cantidad);
    setMensaje(`Agregaste ${cantidad} × ${articulo.nombre} al carrito.`);
    setCantidad(1);
  };

  return (
    <div className="space-y-4">
      <Link to="/articulos" className="text-sm text-brand-600 hover:underline">← Volver al listado</Link>

      <div className="tarjeta max-w-xl space-y-3 p-6">
        <p className="text-sm uppercase text-gray-500 dark:text-gray-400">{articulo.categoria}</p>
        <h1 className="text-2xl font-bold">{articulo.nombre}</h1>
        <p className="text-2xl font-bold text-brand-600">{formatearPrecio(articulo.precio)}</p>
        <p className="text-gray-600 dark:text-gray-300">{articulo.descripcion}</p>
        <p>Stock disponible: <strong>{articulo.stock}</strong></p>

        {articulo.stock > 0 ? (
          <div className="flex items-center gap-4 pt-2">
            <SelectorCantidad
              cantidad={cantidad}
              onAumentar={() => setCantidad(cantidad + 1)}
              onDisminuir={() => setCantidad(cantidad - 1)}
              puedeAumentar={cantidad < articulo.stock}
              puedeDisminuir={cantidad > 1}
            />
            <Button onClick={handleAgregar}>Agregar al carrito</Button>
          </div>
        ) : (
          <p className="font-semibold text-red-600">Sin stock</p>
        )}

        {mensaje && <p className="rounded-lg bg-brand-100 p-3 text-sm text-brand-700">{mensaje}</p>}
      </div>
    </div>
  );
}
