import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy loading: cada página se carga solo cuando se visita
const ListaArticulos = lazy(() => import('../pages/ListaArticulos'));
const DetalleArticulo = lazy(() => import('../pages/DetalleArticulo'));
const AgregarArticulo = lazy(() => import('../pages/AgregarArticulo'));
const Carrito = lazy(() => import('../pages/Carrito'));

// Todas las rutas de la aplicación en un solo archivo
export default function AppRoutes() {
  return (
    <Suspense fallback={<p className="p-8 text-center">Cargando...</p>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/articulos" />} />
          {/* Rutas anidadas: listado y detalle con parámetro dinámico :id */}
          <Route path="articulos">
            <Route index element={<ListaArticulos />} />
            <Route path=":id" element={<DetalleArticulo />} />
          </Route>
          <Route path="agregar" element={<AgregarArticulo />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="*" element={<Navigate to="/articulos" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
