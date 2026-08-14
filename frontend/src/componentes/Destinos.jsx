import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/destinos") // ✅ rota correta agora
      .then((res) => res.json())
      .then((dados) => {
        setDestinos(dados);
        setCarregando(false);
      })
      .catch((err) => {
        console.error(err);
        setErro("Não foi possível carregar os destinos.");
        setCarregando(false);
      });
  }, []);

  return (
    <>
      <h2>Conheça nossos destinos</h2>

      {carregando && <p>Carregando destinos...</p>}
      {erro && <p>{erro}</p>}
      {!carregando && !erro && destinos.length === 0 && (
        <p>Nenhum destino encontrado.</p>
      )}

      <div className="cards-container">
        {destinos.map((destino) => (
          <div key={destino.id}>
            <div className="destino-card">
              <div className="card-image">
                <Link to={`/destinos/${destino.id}`}>
                  <figure className="image is-4by3">
                    <img
                      src={destino.url_imagem || "/imagens/destinos/placeholder.jpg"}
                      alt={destino.nome}
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{destino.nome}</p>
                    <p className="subtitle is-6">{destino.pais}</p>
                  </div>
                </div>
                <div className="content">
                  {destino.descricao}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Destinos;