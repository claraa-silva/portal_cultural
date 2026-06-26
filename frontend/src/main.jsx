import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bulma/css/bulma.min.css'
import './css/index.css'

import App from './App.jsx'
import Mapa from './telas/Mapa.jsx'
import Dicas from './telas/Dicas.jsx'
import DetalhesPais from './telas/DetalhesPais.jsx'
import Navbar from './componentes/Navbar.jsx'
import Experiencias from './telas/Experiencias.jsx'
import Intercambios from './telas/Intercambios.jsx'
import InterDetalhes from './telas/InterDetalhes.jsx'
import Pais from './telas/Pais.jsx'
import Destinos from './telas/Destinos.jsx'


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
        path: "/intercambios",
        element: <Intercambios/>
      },
      {
        path: "/intercambios/:id",
        element: <InterDetalhes/>
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
      },
      {
<<<<<<< HEAD
        path: "/dicas",
        element: <Dicas />
=======
        path: "/destinos/:iddestino",
        element: <Destinos />
>>>>>>> 8812ec0b39ccda6d63895272b70d3104b0e09441
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)