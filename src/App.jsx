import { InventarioProvider } from './context/InventarioContext';
import AppRoutes from './routes/AppRoutes';

// App queda simple: entrega el estado global y delega la navegación a AppRoutes
export default function App() {
  return (
    <InventarioProvider>
      <AppRoutes />
    </InventarioProvider>
  );
}
