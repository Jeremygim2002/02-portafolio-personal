# Portafolio Personal - Jeremy Rosas

![License](https://img.shields.io/badge/license-MIT-green) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.11-purple) ![Node.js](https://img.shields.io/badge/Node.js-18-green) ![Express](https://img.shields.io/badge/Express-5.1.0-yellow) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)

---

## Descripción

Este proyecto es un portafolio personal desarrollado con tecnologías modernas que muestra habilidades, proyectos y datos personales de mi persona. 

Está dividido en frontend y backend, usando React 19 y Tailwind CSS para la interfaz, y Express 5 junto a PostgreSQL para la API y gestión de datos.

Incluye animaciones con GSAP, manejo de rutas y scroll suave con React Router y GSAP ScrollToPlugin, y un backend REST API con validación y control de errores.

---

## Tecnologías usadas

### Frontend

- React 19.1.0
- React Router DOM 7.7.1
- Tailwind CSS 4.1.11
- GSAP 3.13.0
- React Hooks personalizados (`useGsapScrollFadeUp`, `useHashScroll`, `useScrollTriggerState`, `useFetch`)
- Vite 7.0.4 para bundling
- Librerías adicionales:
  - `react-icons`
  - `react-masonry-css`
  - `react-responsive-carousel`
  - `yet-another-react-lightbox`
  - Fuentes: `@fontsource-variable/montserrat`, `@fontsource/poppins`

### Backend

- Node.js 18 (con `"type": "module"`)
- Express 5.1.0
- PostgreSQL 15 con `pg` para conexión
- Middleware para CORS, manejo de errores y validación con Zod
- Logger con Pino y Pino Pretty
- Estructura MVC con controladores, modelos, rutas y esquemas de validación
- Scripts para desarrollo con Nodemon
- Testing con Vitest

---

## Estructura del proyecto

backend/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── schemas/
├── tests/
├── utils/
├── .env
├── createApp.js
└── server.js

src/
├── assets/
│ └── img/
├── components/
│ ├── common/
│ ├── home/
│ ├── detalleProyecto/
│ ├── layouts/
│ └── ui/
├── hooks/
│ ├── useFetch.js
│ ├── useGsapScrollFadeUp.js
│ ├── useHashScroll.js
│ └── useScrollTriggerState.js
├── pages/
│ ├── PaginaHome.jsx
│ ├── PaginaDetalleProyecto.jsx
│ └── PaginaNoEnconmtrada.jsx
├── services/
├── App.jsx
├── main.jsx
├── .env
└── index.css