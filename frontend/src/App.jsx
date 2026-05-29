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
      imagem_url: "https://bushop.com/wp-content/uploads/sites/6/boliviahop-palace.jpg"
    },
    {
      id: "CO",
      imagem_url: "https://media-cdn.tripadvisor.com/media/photo-s/08/fa/22/da/palacio-de-narino.jpg"
    },
    {
      id: "PE",
      imagem_url: "https://www.machupicchuterra.com/wp-content/uploads/lima-palacio-gobierno-peru-full-1.jpg"
    },
    {
      id: "PY",
      imagem_url: "https://www.cidadeecultura.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/06/Assuncao-Palacio-Lopez-Presidencial-ft-Marco-Briones-web-1024x683.jpg.webp"
    },
    {
      id: "UY",
      imagem_url: "https://img.magnific.com/fotos-premium/palacio-legislativo-do-uruguai-um-edificio-monumental-em-montevideu_261932-18316.jpg"
    },
    {
      id: "VE",
      imagem_url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Miraflores_Palace.png"
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