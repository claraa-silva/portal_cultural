import { useEffect, useState } from "react";
import { Link } from "react-router";
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

  const [paises, setPaises] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:8000/paises")
  //     .then(res => res.json())
  //     .then(data => setPaises(data));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8000/paises")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(paises)
        setPaises(data)
      })
      .catch(err => console.log(err))
  }, [])

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
                <Link to="/destinos/:iddestino">
                  <figure className="image is-4by3">
                    <img
                      src="/imagens/destinos/glaciar-perito-moreno.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">Glaciar Perito Moreno</p>
                    <p className="subtitle is-6">Argentina</p>
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
                <Link to="/destinos/:iddestino">
                  <figure className="image is-4by3">
                    <img
                      src="/imagens/destinos/cartagena.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">Cartagena das Índias</p>
                    <p className="subtitle is-6">Colombia</p>
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
                <Link to="/destinos/:iddestino">
                  <figure className="image is-4by3">
                    <img
                      src="/imagens/destinos/machu-picchu.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">Machu Picchu</p>
                    <p className="subtitle is-6">Peru</p>
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
                <Link to="/destinos/:iddestino">
                  <figure className="image is-4by3">
                    <img
                      src="/imagens/destinos/salar-de-uyuni.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">Salar de Uyuni</p>
                    <p className="subtitle is-6">Bolívia</p>
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