import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mapa from "./telas/Mapa.jsx"

import Argentina from "./telas/Argentina.jsx"
import Bolivia from "./telas/Bolivia.jsx"
import Colombia from "./telas/Colombia.jsx"
import Paraguai from "./telas/Paraguai.jsx"
import Peru from "./telas/Peru.jsx"
import Uruguai from "./telas/Uruguai.jsx"
import Venezuela from "./telas/Venezuela.jsx"

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
    path: "/argentina",
    element: <Argentina/>
  },
  {
    path: "/bolivia",
    element: <Bolivia/>
  },
  {
    path: "/colombia",
    element: <Colombia/>
  },
  {
    path: "/paraguai",
    element: <Paraguai/>
  },
  {
    path: "/peru",
    element: <Peru/>
  },
  {
    path: "/uruguai",
    element: <Uruguai/>
  },
  {
    path: "/venezuela",
    element: <Venezuela/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
