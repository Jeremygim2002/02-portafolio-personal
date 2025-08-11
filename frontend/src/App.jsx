import { Routes, Route } from 'react-router-dom'

import PaginaHome from '@pages/PaginaHome'
import PaginaDetalleProyecto from '@pages/PaginaDetalleProyecto'
import PaginaNoEncontrada from '@pages/PaginaNoEncontrada'
import MainLayout from '@components/layouts/MainLayout'

function App() {
  return (
    <div className="font-default bg-background text-default">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<PaginaHome />} />
          <Route path="/proyecto/:id" element={<PaginaDetalleProyecto />} />
        </Route>
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </div>
  )
}

export default App
