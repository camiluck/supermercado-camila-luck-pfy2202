import { NavLink } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import TemaToggle from './TemaToggle';

const claseEnlace = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-white/10 ${isActive ? 'bg-white/20' : ''}`;

// Barra de navegación con contador del carrito
export default function Navbar() {
  const { totalUnidades } = useInventario();

  return (
    <header className="bg-brand-700 dark:bg-gray-950">
      <nav className="contenedor flex flex-wrap items-center justify-between gap-2 py-3">
        <span className="text-lg font-bold text-white">🛒 SuperMarket</span>
        <div className="flex flex-wrap items-center gap-1">
          <NavLink to="/articulos" className={claseEnlace}>Artículos</NavLink>
          <NavLink to="/agregar" className={claseEnlace}>Agregar</NavLink>
          <NavLink to="/carrito" className={claseEnlace}>
            Carrito ({totalUnidades})
          </NavLink>
          <TemaToggle />
        </div>
      </nav>
    </header>
  );
}
