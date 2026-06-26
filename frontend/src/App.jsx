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
                <figure className="image is-4by3">
                  <img
                    src="https://www.voltologo.net/wp-content/uploads/2015/04/geleiras-america-latina.jpg"
                    alt="Placeholder image"
                  />
                </figure>
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
                <figure className="image is-4by3">
                  <img
                    src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEMJ0SmNaHWj5ObfRMPg-h0qDXWFMCxFvc52a1Mj8_sBlkUNeOwWtE7TaHPhvtR3INQ5_GRSa21Q_0c3GSV6tfP4A0-OYupnh-TTSRG_XuioxvwtIxD7NDkc4lHtyJGUjheVisyFg=w540-h312-n-k-no"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">Laguna Quilotoa</p>
                    <p className="subtitle is-6">Equador</p>
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
                    src="https://www.voltologo.net/wp-content/uploads/2015/04/Machu-Picchu-1.jpg"
                    alt="Placeholder image"
                  />
                </figure>
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
                <figure className="image is-4by3">
                  <img
                    src="https://www.voltologo.net/wp-content/uploads/2015/04/paisagens-america-latina.jpg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">Deserto do Atacama </p>
                    <p className="subtitle is-6">Chile</p>
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