import { useState } from 'react';
import './App.css';
import Carousel from "./componentes/Carousel.jsx";
import { Link, useLoaderData } from "react-router-dom";
import DetalhesPais from "./telas/DetalhesPais.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Destinos from "./telas/Destinos";
import Experiencias from "./telas/Experiencias";
import Dicas from "./telas/Dicas";


function App() {
  const [count, setCount] = useState(0)
  const itensCarousel = [
    {
      title: "Argentina",
      // image: "https://c.pxhere.com/images/55/42/bc11afcd7d8e1448667ec6741052-1593435.jpg!d"
      image: "https://smapse.com/storage/2018/12/universidad-nacional-de-la-plata.jpg",
      codigo: "AR"
    },
    {
      title: "Bolívia",
      // image: "https://live.staticflickr.com/8071/8292682199_0c48bfa555_b.jpg"
      image: "https://live.staticflickr.com/5001/5285441287_95af5e5720_b.jpg",
      codigo: "BO"
    },
    {
      title: "Colômbia",
      // image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJjYXJ0YWdlbmFfY29sb21iaWFfc3RyZWV0X2Zsb3dlci1pbWFnZS1reWJlMTd6ZC5qcGc.jpg"
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/00-130_Universidad_Nacional_de_Colombia._Facultad_de_Arquitectura4.jpg",
      codigo: "CO"
    },
    {
      title: "Paraguai",
      // image: "https://live.staticflickr.com/7179/6848185519_19e17b495f_b.jpg"
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Univ_Nacional_de_Asunci%C3%B3n.jpg",
      codigo: "PY"
    },
    {
      title: "Peru",
      // image: "https://i1.pickpik.com/photos/623/523/826/peru-machu-picchu-lama-world-heritage-preview.jpg"
      image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Facultad_de_Medicina_Humana_San_Fernando_de_la_UNMSM.jpg",
      codigo: "PE"
    },
    {
      title: "Uruguai",
      // image: "https://c.pxhere.com/photos/32/bb/uruguay_architecture_political_cologne_city-867803.jpg!d"
      image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Facultad_de_Medicina%2C_Montevideo_25.jpg",
      codigo: "UY"
    },
    {
      title: "Venezuela",
      // image: "https://storage.needpix.com/rsynced_images/cities-2066543_1280.jpg"
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Biblioteca_de_la_Facultad_de_Ingenier%C3%ADa%2C_Universidad_Central_de_Venezuela.jpg",
      codigo: "VE"
    },
  ];

  return(
    <>
      <Navbar />

      <Routes>
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/dicas" element={<Dicas />} />
      </Routes>
    </>
  )
}

export default App
