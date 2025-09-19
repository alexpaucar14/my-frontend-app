# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Estructura:

react-app/
 ├── public/                # Archivos estáticos (favicon, imágenes públicas)
 ├── src/
 │   ├── assets/            # Recursos (imágenes, CSS global, fuentes)
 │   ├── components/        # Componentes reutilizables (Button, Modal, etc.)
 │   ├── layouts/           # Layouts globales (MainLayout, AuthLayout)
 │   ├── pages/             # Vistas por ruta (Login, Dashboard, Ventas, Admin)
 │   ├── routes/            # Definición de rutas (react-router)
 │   ├── hooks/             # Hooks personalizados (useAuth, useFetch)
 │   ├── context/           # Context API (AuthProvider, ThemeProvider)
 │   ├── services/          # Conexiones a API (axios/fetch centralizado)
 │   ├── utils/             # Helpers, validaciones, formateadores
 │   ├── styles/            # Tailwind config, CSS global, variables
 │   ├── main.jsx           # Entry point de Vite/React
 │   └── App.jsx            # App principal
 ├── index.html
 ├── vite.config.js
 └── package.json


## Backend:

express-api/
 ├── src/
 │   ├── config/            # Configuración global (db, env, logger)
 │   │    ├── db.js         # Conexión Sequelize/Knex/pg
 │   │    └── env.js        # Variables de entorno
 │   ├── models/            # Modelos de datos (User.js, Venta.js)
 │   ├── controllers/       # Lógica de negocio (manejo de requests/responses)
 │   ├── services/          # Servicios (conexión externa, cálculos, email, pagos)
 │   ├── routes/            # Definición de endpoints por recurso
 │   ├── middlewares/       # Middlewares (auth, logs, validaciones)
 │   ├── utils/             # Helpers (formateo, validaciones, JWT)
 │   ├── index.js           # Punto de entrada Express
 │   └── app.js             # Configuración de la app (middlewares globales, rutas)
 ├── migrations/            # Migraciones de base de datos
 ├── seeders/               # Datos iniciales (usuarios admin, etc.)
 ├── .env                   # Variables de entorno
 └── package.json
