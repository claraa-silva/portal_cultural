import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mapa from "./telas/Mapa.jsx"
import Uruguai from "./telas/Uruguai.jsx"

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
    path: "/uruguai",
    element: <Uruguai/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
