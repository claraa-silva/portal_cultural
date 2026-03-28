import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DetalhesPais() {
  const { idPais } = useParams();
  const [detalhes, setDetalhes] = useState(null);
  const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:8000/paises/${idPais}`)
            .then(response => response.json())
            .then(data => setDetalhes(data))
            .catch(error => console.error("Erro ao buscar detalhes do país:", error));
    }, [idPais]);

    if (!detalhes) {
        return <div>Carregando...</div>;
    }
    return (
        <>
            <div>
                <h1>{detalhes.nome}</h1>
                <p>contexto: {detalhes.contexto}</p>
                <p>mapa: {detalhes.mapa}</p>
                <Link to="/">Voltar para a lista de países</Link>
            </div>
        </>
    );
}

export default DetalhesPais;