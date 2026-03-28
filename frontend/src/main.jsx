import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mapa from "./telas/Mapa.jsx"
import DetalhesPais from './telas/DetalhesPais.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/mapa",
    element: <Mapa/>
  },
  {
    path: "/detalhes/:idPais",
    element: <DetalhesPais/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
