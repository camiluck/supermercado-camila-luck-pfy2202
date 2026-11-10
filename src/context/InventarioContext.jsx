import { createContext, useContext, useReducer } from 'react';
import { INVENTARIO_INICIAL } from '../data/inventarioInicial';
import { ACCIONES, inventarioReducer } from './inventarioReducer';

const InventarioContext = createContext();

// Proveedor del estado global (Context + useReducer)
export function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(inventarioReducer, {
    inventario: INVENTARIO_INICIAL,
    carrito: [],
  });

  const agregarArticulo = (articulo) => dispatch({ type: ACCIONES.AGREGAR_ARTICULO, payload: articulo });
  const agregarAlCarrito = (id, cantidad) => dispatch({ type: ACCIONES.AGREGAR_AL_CARRITO, payload: { id, cantidad } });
  const aumentarCantidad = (id) => dispatch({ type: ACCIONES.AUMENTAR_CANTIDAD, payload: id });
  const disminuirCantidad = (id) => dispatch({ type: ACCIONES.DISMINUIR_CANTIDAD, payload: id });
  const quitarDelCarrito = (id) => dispatch({ type: ACCIONES.QUITAR_DEL_CARRITO, payload: id });

  // Une cada item del carrito con los datos del artículo (nombre, precio, stock)
  const itemsCarrito = estado.carrito.map((item) => ({
    ...estado.inventario.find((a) => a.id === item.id),
    cantidad: item.cantidad,
  }));
  const totalUnidades = itemsCarrito.reduce((suma, i) => suma + i.cantidad, 0);
  const totalPagar = itemsCarrito.reduce((suma, i) => suma + i.cantidad * i.precio, 0);

  return (
    <InventarioContext.Provider
      value={{
        inventario: estado.inventario,
        carrito: estado.carrito,
        itemsCarrito,
        totalUnidades,
        totalPagar,
        agregarArticulo,
        agregarAlCarrito,
        aumentarCantidad,
        disminuirCantidad,
        quitarDelCarrito,
      }}
    >
      {children}
    </InventarioContext.Provider>
  );
}

// Hook para usar el contexto en cualquier componente
export function useInventario() {
  return useContext(InventarioContext);
}
