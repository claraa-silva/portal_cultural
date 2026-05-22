import { useEffect, useState } from "react";
import './css/App.css';
import EmblaCarousel from './componentes/EmblaCarousel'
import Mapa from './telas/Mapa.jsx';
import './css/embla.css'
import imagemBrasil from './imagens/brasil.webp'
import cataratas from './imagens/cataratas.jpg'


function App() {
  const OPTIONS = {
    dragFree: true,
    loop: true
  }
  
  const [paises, setPaises] = useState([
    {
      id: "AR",
      imagem_url: "https://oficinadeinverno.com.br/cdn/shop/articles/oficina-de-inverno-curiosidades-sobre-a-argentina-capa.jpg?v=1659468750"
    },
    {
      id: "BO",
      imagem_url: ""
    },
    {
      id: "CO",
      imagem_url: ""
    },
    {
      id: "PE",
      imagem_url: ""
    },
    {
      id: "PY",
      imagem_url: ""
    },
    {
      id: "UY",
      imagem_url: ""
    },
    {
      id: "VE",
      imagem_url: ""
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/paises")
      .then(res => res.json())
      .then(data => setPaises(data));
  }, []);


  return(
    <>
      <div className="fachada">
        <img src={cataratas} alt="Fachada" />
      </div>
      <h2 className='texto'><b>Um lugar onde estudantes brasileiros podem explorar novas culturas,
          fortalecer conexões e viver experiências inesquecíveis em países
          hispanofalantes. Cada viagem é uma
          oportunidade de aprender, descobrir novos caminhos e ampliar horizontes
          através da língua, da cultura e das amizades.</b>
      </h2>
      <EmblaCarousel
        slides={paises}
        options={OPTIONS}
      />
      <h2 className='texto2'>Your Dream Trip Starts Now</h2>
      <Mapa />
    </>
  )
}

export default App