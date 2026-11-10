import { useState } from 'react';
import ArticuloCard from '../components/ArticuloCard';
import FiltroCategoria from '../components/FiltroCategoria';
import { useInventario } from '../context/InventarioContext';

// Listado de artículos con filtro por categoría.
// El filtro es un estado local y la lista filtrada se calcula a partir del
// inventario, así los datos originales nunca se pierden.
export default function ListaArticulos() {
  const { inventario } = useInventario();
  const [categoria, setCategoria] = useState('Todas');

  const articulosFiltrados =
    categoria === 'Todas' ? inventario : inventario.filter((a) => a.categoria === categoria);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="titulo-pagina">Artículos del inventario</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Mostrando {articulosFiltrados.length} de {inventario.length} artículos
        </p>
      </div>

      <FiltroCategoria seleccionada={categoria} onCambiar={setCategoria} />

      {articulosFiltrados.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No hay artículos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {articulosFiltrados.map((articulo) => (
            <ArticuloCard key={articulo.id} articulo={articulo} />
          ))}
        </div>
      )}
    </div>
  );
}
