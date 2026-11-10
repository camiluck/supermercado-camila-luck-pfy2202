import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Layout común: navbar arriba y la página actual en <Outlet />
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="contenedor py-8">
        <Outlet />
      </main>
    </div>
  );
}
