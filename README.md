# 🚀 Portafolio Personal - Jeremy Rosas

![License](https://img.shields.io/badge/license-MIT-green) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.11-purple) ![Node.js](https://img.shields.io/badge/Node.js-18-green) ![Express](https://img.shields.io/badge/Express-5.1.0-yellow) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)


## Descripción

Portafolio personal moderno con React 19, TailwindCSS 4, Express 5 y PostgreSQL. Optimizado para rendimiento, accesibilidad y SEO.
---

## Tecnologías usadas

### Frontend

- React 19.1.0
- React Router DOM 7.7.1
- TailwindCSS 4.1.11
- GSAP 3.13.0
- Vite 7.0.4
- react-masonry-css
- react-responsive-carousel
- yet-another-react-lightbox
- react-icons
- @fontsource-variable/montserrat
- @fontsource/poppins

### Backend

- Node.js 18+ (ESM)
- Express 5.1.0
- PostgreSQL 15
- Zod 4.0.13
- Pino 9.7.0
- Vitest 3.2.4
- Compression 1.7.5

---

## Estructura del proyecto

```
portafolio-personal-moderno/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── tests/
│   ├── utils/
│   ├── createApp.js
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/img/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
└── README.md
```

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/Jeremygim2002/02-portafolio-personal.git
cd portafolio-personal-moderno

# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend
cd ../frontend
npm install
echo "VITE_API_URL=http://localhost:3000" > .env
npm run dev
```

## Scripts

### Backend
```bash
npm run dev          # Desarrollo
npm start            # Producción
npm test             # Testing
npm run test:watch   # Testing modo watch
```

### Frontend
```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run preview      # Preview build
npm run lint         # ESLint
```


## Contacto

**Jeremy Rosas**
- GitHub: [@Jeremygim2002](https://github.com/Jeremygim2002)
- LinkedIn: [jeremy-rosas](https://www.linkedin.com/in/jeremy-rosas/)
- Email: jremygim.2002@gmail.com
