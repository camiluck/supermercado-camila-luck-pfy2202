// Control de cantidad ( − 3 + ), se usa en el detalle y en el carrito
export default function SelectorCantidad({ cantidad, onAumentar, onDisminuir, puedeAumentar = true, puedeDisminuir = true }) {
  const claseBoton = 'h-8 w-8 font-bold hover:bg-gray-100 disabled:opacity-40 dark:hover:bg-gray-700';
  return (
    <div className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600">
      <button type="button" className={claseBoton} onClick={onDisminuir} disabled={!puedeDisminuir}>−</button>
      <span className="w-10 text-center font-semibold">{cantidad}</span>
      <button type="button" className={claseBoton} onClick={onAumentar} disabled={!puedeAumentar}>+</button>
    </div>
  );
}
