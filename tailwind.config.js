/** @type {import('tailwindcss').Config} */
export default {
  // Purga: solo se incluyen en el CSS final las clases usadas en estos archivos
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Modo oscuro controlado con la clase "dark" en <html>
  darkMode: 'class',
  theme: {
    extend: {
      // Colores de marca del supermercado
      colors: {
        brand: {
          50: '#effaf3',
          100: '#d8f3e1',
          500: '#16a34a',
          600: '#15803d',
          700: '#166534',
        },
        accent: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
