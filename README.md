# 🛒 SuperMarket · Gestión de inventario

Aplicación web en **React** para gestionar el inventario de un supermercado.
Actividad sumativa Semana 3: *Desarrollando sitios web con React avanzado* (Desarrollo Frontend II, PFY2202).

🔗 **Demo (GitHub Pages):** https://camiluck.github.io/supermercado-camila-luck-pfy2202/

---

## ✨ Funcionalidades

| Pantalla | Ruta | Qué hace |
|---|---|---|
| Lista de artículos | `/articulos` | Muestra todos los artículos con categoría, precio y stock, y permite **filtrar por categoría**. |
| Detalle de artículo | `/articulos/:id` | Información completa del artículo. Permite elegir la cantidad y **agregarlo al carrito** (se descuenta del stock). |
| Agregar artículo | `/agregar` | Formulario para registrar nuevos artículos. |
| Carrito de compras | `/carrito` | Lista lo agregado. **Aumentar / disminuir / quitar** cantidades actualiza el inventario general. |

### Reglas del inventario
- Al agregar al carrito, las unidades **se restan del stock**.
- Al aumentar una cantidad en el carrito se resta 1 del stock; al disminuirla se devuelve 1.
- Al quitar un artículo del carrito, todas sus unidades **vuelven al inventario**.
- No se puede agregar más de lo disponible: el botón "+" se desactiva cuando el stock llega a 0.
- El filtro **no modifica los datos originales**: la lista filtrada se calcula a partir del inventario.

---

## 🧰 Tecnologías

- **React 18** + **Vite**
- **React Router 6**: rutas centralizadas, layout con `Outlet`, rutas anidadas, parámetro dinámico `:id`, *lazy loading* con `React.lazy` + `Suspense`.
- **Estado global** con **Context API + `useReducer`**.
- **Tailwind CSS 3**: colores propios (`brand`), clases reutilizables con `@apply`, modo oscuro y diseño responsive.
- **gh-pages** para publicar en GitHub Pages.

---

## 📁 Estructura del proyecto

```
src/
├── App.jsx                     # Provider del estado global + rutas
├── main.jsx                    # Punto de entrada (HashRouter)
├── index.css                   # Tailwind + clases reutilizables (@apply)
├── routes/
│   └── AppRoutes.jsx           # Todas las rutas en un solo archivo (lazy loading)
├── layouts/
│   └── MainLayout.jsx          # Navbar + <Outlet /> + footer
├── context/
│   ├── InventarioContext.jsx   # Provider y hook useInventario()
│   └── inventarioReducer.js    # Lógica de inventario y carrito (inmutable)
├── data/
│   └── inventarioInicial.js    # Categorías y artículos de ejemplo
├── pages/                      # Una pantalla por archivo
│   ├── ListaArticulos.jsx
│   ├── DetalleArticulo.jsx
│   ├── AgregarArticulo.jsx
│   └── Carrito.jsx
├── components/                 # Componentes reutilizables
│   ├── Button.jsx              # Variantes: primario y secundario
│   ├── ArticuloCard.jsx
│   ├── FiltroCategoria.jsx
│   ├── SelectorCantidad.jsx    # Se usa en el detalle y en el carrito
│   ├── Navbar.jsx              # Navegación con contador del carrito
│   └── TemaToggle.jsx          # Modo claro / oscuro
└── utils/
    └── formato.js              # Formato de precios en CLP
```

---

## 🚀 Ejecutar en local

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
npm start          # abre http://localhost:5173
```

Otros comandos:

```bash
npm run build      # genera la versión de producción en /dist
npm run preview    # sirve la versión de producción en local
```

---

## 🌐 Publicación en GitHub Pages

El sitio se publica **automáticamente** con GitHub Actions (`.github/workflows/deploy.yml`):
cada vez que se sube código a `main`, el flujo instala dependencias, compila con `npm run build`
y publica la carpeta `dist` en la rama **`gh-pages`**.

GitHub Pages está configurado en **Settings → Pages → Branch: `gh-pages` / (root)**.

También se puede publicar manualmente desde la terminal con:

```bash
npm run deploy
```

> Se usa `HashRouter` (las URL llevan `#/`) y `base: './'` en `vite.config.js` para que todas las rutas funcionen en GitHub Pages, incluso al recargar la página.

---

## 👤 Autor

**Camila Luck** ([@camiluck](https://github.com/camiluck)) · Desarrollo Frontend II (PFY2202) · Duoc UC
