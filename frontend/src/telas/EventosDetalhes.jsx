import { useEffect, useState } from "react";

function EventosDetalhes() {
  const [eventos, setEventos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/eventos")
      .then((res) => res.json())
      .then((dados) => {
        setEventos(dados);
        setCarregando(false);
      })
      .catch((err) => {
        console.error(err);
        setErro("Não foi possível carregar os eventos.");
        setCarregando(false);
      });
  }, []);

  return (
    <>
      <h2>Confira eventos</h2>

      {carregando && <p>Carregando eventos...</p>}
      {erro && <p>{erro}</p>}
      {!carregando && !erro && (
        <p>Nenhum evento encontrado.</p>
      )}

      <div className="eventos-container">
        {eventos.map((evento) => (
          <div className="evento-card" key={evento.id}>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{evento.nome}</p>
                  <p className="subtitle is-6">{evento.loc}</p>
                </div>
              </div>

              <div className="content">
                {evento.descricao}
                <br />
                <strong>Época:</strong> {evento.epoca}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EventosDetalhes;