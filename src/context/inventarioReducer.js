// Toda la lógica del inventario y el carrito.
// Lo que entra al carrito se resta del stock y lo que sale vuelve al stock.
// Nunca se modifica el estado directamente: siempre se crean arrays nuevos.

export const ACCIONES = {
  AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
  AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
  AUMENTAR_CANTIDAD: 'AUMENTAR_CANTIDAD',
  DISMINUIR_CANTIDAD: 'DISMINUIR_CANTIDAD',
  QUITAR_DEL_CARRITO: 'QUITAR_DEL_CARRITO',
};

// Cambia el stock de un artículo (delta negativo resta, positivo suma)
const cambiarStock = (inventario, id, delta) =>
  inventario.map((art) => (art.id === id ? { ...art, stock: art.stock + delta } : art));

// Cambia la cantidad en el carrito; si llega a 0 se elimina
const cambiarCarrito = (carrito, id, delta) => {
  const existe = carrito.find((item) => item.id === id);
  const nuevo = existe
    ? carrito.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + delta } : item))
    : [...carrito, { id, cantidad: delta }];
  return nuevo.filter((item) => item.cantidad > 0);
};

export function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case ACCIONES.AGREGAR_ARTICULO: {
      const nuevoId = Math.max(0, ...estado.inventario.map((a) => a.id)) + 1;
      return { ...estado, inventario: [...estado.inventario, { ...accion.payload, id: nuevoId }] };
    }

    case ACCIONES.AGREGAR_AL_CARRITO: {
      const { id, cantidad } = accion.payload;
      const articulo = estado.inventario.find((a) => a.id === id);
      if (cantidad > articulo.stock) return estado; // no hay suficiente stock
      return {
        inventario: cambiarStock(estado.inventario, id, -cantidad),
        carrito: cambiarCarrito(estado.carrito, id, cantidad),
      };
    }

    case ACCIONES.AUMENTAR_CANTIDAD: {
      const articulo = estado.inventario.find((a) => a.id === accion.payload);
      if (articulo.stock === 0) return estado; // sin stock
      return {
        inventario: cambiarStock(estado.inventario, accion.payload, -1),
        carrito: cambiarCarrito(estado.carrito, accion.payload, 1),
      };
    }

    case ACCIONES.DISMINUIR_CANTIDAD:
      return {
        inventario: cambiarStock(estado.inventario, accion.payload, 1),
        carrito: cambiarCarrito(estado.carrito, accion.payload, -1),
      };

    case ACCIONES.QUITAR_DEL_CARRITO: {
      const item = estado.carrito.find((i) => i.id === accion.payload);
      return {
        inventario: cambiarStock(estado.inventario, accion.payload, item.cantidad),
        carrito: estado.carrito.filter((i) => i.id !== accion.payload),
      };
    }

    default:
      return estado;
  }
}
