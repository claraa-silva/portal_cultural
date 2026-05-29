import { useEffect, useState } from "react";
import EmblaCarousel from './componentes/EmblaCarousel'
import cataratas from './imagens/cataratas.jpg'
import Mapa from './telas/Mapa.jsx';
import './css/App.css';
import './css/embla.css'


function App() {
  const OPTIONS = {
    dragFree: true,
    loop: true
  }
  
  const [paises, setPaises] = useState([
    {
      id: "AR",
      nome: "Argentina",
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
      <section className="hero">
        <img src={cataratas} alt="Fachada" />

        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Descubra a América Latina além das fronteiras</h1>
          <h2>Uma plataforma cultural para estudantes brasileiros explorarem países hispanofalantes da América do Sul.</h2>
          <button>Explorar destinos</button>
        </div>
      </section>

      <section className="intro">
        <h2>Conectando culturas através das fronteiras.</h2>
        <p>Um lugar onde estudantes brasileiros podem explorar novas culturas,
          fortalecer conexões e viver experiências inesquecíveis em países
          hispanofalantes. Cada viagem é uma
          oportunidade de aprender, descobrir novos caminhos e ampliar horizontes
          através da língua, da cultura e das amizades.</p>
      </section>

      <section className="carousel">
        <EmblaCarousel slides={paises} options={OPTIONS}/>
      </section>

      <section className="section-mapa">
        <h2>Conexões pela América do Sul</h2>
        <p>Explore instituições e centros acadêmicos que aproximam estudantes brasileiros da cultura hispano-americana.</p>
      </section>
      <Mapa />

      <section className="section-destino">
        <h2>Conheça nossos destinos</h2>

          <div className="cards-container">
            <div className="destino-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={cataratas}
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                  iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>

            <div className="destino-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={cataratas}
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                  iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>

            <div className="destino-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={cataratas}
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                  iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>

            <div className="destino-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={cataratas}
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                  iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
        <p></p>
      </section>

      <section className="section-eventos">
        <h2>Confira eventos</h2>
      </section>

      <section className="footer">
        <h2>Portal Cultural</h2>
        <p>Conectando culturas além das fronteiras.</p>
        <p>Plataforma desenvolvida por estudantes do IFSP • 2026</p>
      </section>

    </>
  )
}

export default App