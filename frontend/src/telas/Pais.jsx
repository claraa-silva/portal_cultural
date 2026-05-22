import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pais() {

    const { id } = useParams();

    const [pais, setPais] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:8000/paises/${id}`)
            .then(res => res.json())
            .then(data => {
                setPais(data);
            })
            .catch(err => {
                console.log(err);
            });

    }, [id]);

    if (!pais) {
        return <h1>Carregando...</h1>;
    }

    return (
        <div className="pagina-pais">
            <div className="column is-3">
                <div className="card" style={{ overflow: "hidden" }}>
                    <div className="card-image">
                        <figure className="image is-3by4">
                            <img src={pais.imagem_url} alt={pais.nome} />
                        </figure>
                    </div>
                </div>
            </div>

            <h1>{pais.nome}</h1>

            <p>{pais.contexto}</p>

        </div>
    );
}

export default Pais;