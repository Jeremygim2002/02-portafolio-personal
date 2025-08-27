import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const PaginaHome = lazy(() => import('@pages/PaginaHome'))
const PaginaDetalleProyecto = lazy(() => import('@pages/PaginaDetalleProyecto'))
const PaginaNoEncontrada = lazy(() => import('@pages/PaginaNoEncontrada'))
const MainLayout = lazy(() => import('@components/layouts/MainLayout'))

function App() {
  return (
    <div className="font-default bg-background text-default">
      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<PaginaHome />} />
            <Route path="/proyecto/:id" element={<PaginaDetalleProyecto />} />
          </Route>
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
