# React + Vite

VITE v7.1.4


## Estructura:
```tree
react-app/
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/               # 📂 Recursos estáticos globales (fuentes, iconos, estilos)
│   │   ├── fonts/
│   │   └── styles/
│   │       ├── _variables.css
│   │       └── global.css
│   ├── components/           # 📦 Componentes UI reutilizables (Botones, Modales, Spinner)
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   ├── Button/
│   │   │   └── Button.jsx
│   │   ├── Modal/
│   │   │   └── Modal.jsx
│   │   └── Spinner/
│   │       └── Spinner.jsx
│   ├── features/             # 🚀 Lógica de negocio agrupada por funcionalidad (CORE)
│   │   ├── Auth/
│   │   │   ├── components/   # Formularios específicos de autenticación (Login, Register)
│   │   │   ├── hooks/        # Hooks personalizados para autenticación
│   │   │   │   └── useAuth.js
│   │   │   ├── services/     # Funciones de conexión a la API de autenticación
│   │   │   │   └── authService.js
│   │   │   └── context/      # Contexto para manejar el estado del usuario
│   │   │       └── AuthProvider.jsx
│   │   ├── GenericCRUD/      # 🏗️ Lógica y componentes para mantenedores genéricos
│   │   │   ├── components/
│   │   │   │   ├── CrudTable.jsx
│   │   │   │   └── CrudForm.jsx
│   │   │   └── hooks/
│   │   │       └── useCrud.js
│   │   ├── Users/            # Mantenedor de Usuarios (implementación del GenericCRUD)
│   │   │   ├── components/
│   │   │   │   └── UserForm.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useUsers.js
│   │   │   └── services/
│   │   │       └── userService.js
│   │   ├── Products/         # Mantenedor de Productos
│   │   │   ├── components/
│   │   │   │   └── ProductForm.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useProducts.js
│   │   │   └── services/
│   │   │       └── productService.js
│   │   └── Dashboard/
│   │       ├── components/   # Widgets y gráficos
│   │       └── hooks/
│   │           └── useDashboard.js
│   ├── pages/                # 📄 Vistas principales agrupadas por sección
│   │   ├── auth/             # Páginas relacionadas con la autenticación
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── public/           # Páginas públicas (landing, about)
│   │   │   ├── HomePage.jsx
│   │   │   └── AboutPage.jsx
│   │   ├── app/              # Páginas del área privada de la aplicación
│   │   │   ├── dashboard/
│   │   │   │   └── DashboardPage.jsx
│   │   │   ├── users/
│   │   │   │   └── UsersPage.jsx
│   │   │   ├── products/
│   │   │   │   └── ProductsPage.jsx
│   │   │   └── reports/
│   │   │       └── SalesReportPage.jsx
│   │   └── NotFoundPage.jsx  # Página de error 404
│   ├── routes/               # 🛣️ Configuración centralizada de rutas
│   │   └── AppRoutes.jsx
│   ├── utils/                # 🛠️ Funciones de ayuda reutilizables (formatters, validators)
│   │   └── formatters.js
│   ├── main.jsx              # Punto de entrada de la aplicación
│   └── App.jsx               # Componente principal que maneja la estructura de alto nivel
├── index.html
├── vite.config.js
└── package.json
```
## Backend:
```tree
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