import { useState } from 'react';
import './App.css';
import Carousel from "./componentes/Carousel.jsx";
import { Navbar } from './componentes/Navbar.jsx';


function App() {
  const [count, setCount] = useState(0)
  const itensCarousel = [
    {
      title: "Argentina",
      image: "https://c.pxhere.com/images/55/42/bc11afcd7d8e1448667ec6741052-1593435.jpg!d"
    },
    {
      title: "Bolívia",
      image: "https://live.staticflickr.com/8071/8292682199_0c48bfa555_b.jpg"
    },
    {
      title: "Colômbia",
      image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJjYXJ0YWdlbmFfY29sb21iaWFfc3RyZWV0X2Zsb3dlci1pbWFnZS1reWJlMTd6ZC5qcGc.jpg"
    },
    {
      title: "Paraguai",
      image: "https://live.staticflickr.com/7179/6848185519_19e17b495f_b.jpg"
    },
    {
      title: "Peru",
      image: "https://i1.pickpik.com/photos/623/523/826/peru-machu-picchu-lama-world-heritage-preview.jpg"
    },
    {
      title: "Uruguai",
      image: "https://c.pxhere.com/photos/32/bb/uruguay_architecture_political_cologne_city-867803.jpg!d"
    },
    {
      title: "Venezuela",
      image: "https://storage.needpix.com/rsynced_images/cities-2066543_1280.jpg"
    },
  ];

  return (
    <>
      
      <Carousel items={itensCarousel} autoPlay interval={4000} />
    </>
  )
}

export default App
