import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Mapa from "./telas/Mapa.jsx"
import DetalhesPais from './telas/DetalhesPais.jsx'
import Navbar from './Navbar.jsx'

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
        path: "/mapa",
        element: <Mapa />
      },
      {
        path: "/detalhes/:idPais",
        element: <DetalhesPais />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)