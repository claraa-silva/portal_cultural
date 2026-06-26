import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bulma/css/bulma.min.css'
import './css/index.css'

import App from './App.jsx'
import Mapa from './telas/Mapa.jsx'
import DetalhesPais from './telas/DetalhesPais.jsx'
import Navbar from './componentes/Navbar.jsx'
import Experiencias from './telas/Experiencias.jsx'
import Bolsas from './telas/Bolsas.jsx'
import Pais from './telas/Pais.jsx'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'


// Layout com Navbar fixa
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 👈 wrapper com navbar
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/bolsas",
        element: <Bolsas/>
      },
      {
        path: "/paises/:id",
        element: <Pais/>
      },
      {
        path: "/mapa",
        element: <Mapa />
      },
      {
        path: "/detalhes/:idPais",
        element: <DetalhesPais />
      },
      {
        path: "/experiencias/:idpais",
        element: <Experiencias />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)