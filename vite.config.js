import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' permite que el sitio funcione en GitHub Pages
// (https://usuario.github.io/nombre-repositorio/) sin configurar rutas absolutas.
export default defineConfig({
  plugins: [react()],
  base: './',
});
