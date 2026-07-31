import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/inter.css';

function InterDetalhes() {

    const { id } = useParams();

    const [pais, setPais] = useState({});
    const [intercambios, setIntercambios] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:8000/paises/${id}`)
            .then(res => res.json())
            .then(setPais);

        fetch(`http://localhost:8000/intercambios/${id}`)
            .then(res => res.json())
            .then(setIntercambios);

    }, [id]);

    return (
        <>
            <section
                className="hero is-medium"
                style={{
                    backgroundImage: `url(/imagens/paises/${pais.url_imagem})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center"
                }}
            >
                <div className="hero-body has-text-white">

                    <h1 className="title hero-title">
                        Intercâmbio em {pais.nome}
                    </h1>

                    <p className="subtitle hero-subtitle">
                        Descubra universidades, cursos e bolsas disponíveis para transformar seu futuro.
                    </p>

                </div>
            </section>

            <section className="section">

                <div className="container">

                    <h2 className="title">
                        Programas disponíveis
                    </h2>

                    {intercambios.map((item)=>(

                        <div
                            className="card mb-5"
                            key={item.id}
                        >

                            <div className="card-content">

                                <div className="columns">

                                    <div className="column is-9">

                                        <h3 className="title is-4">
                                            {item.titulo}
                                        </h3>

                                        <p>
                                            {item.descricao}
                                        </p>

                                        <br/>

                                        <p>
                                            <strong>Instituição:</strong> {item.instituicao}
                                        </p>

                                        <p>
                                            <strong>Duração:</strong> {item.duracao}
                                        </p>

                                        <p>
                                            <strong>Idioma:</strong> {item.nivel_idioma}
                                        </p>

                                        <p>
                                            <strong>Bolsa:</strong> {item.bolsa ? "Sim" : "Não"}
                                        </p>

                                        <p>
                                            <strong>Custo:</strong> {item.custo}
                                        </p>

                                    </div>

                                    <div className="column is-3 has-text-centered">

                                        <span className="tag is-primary mb-4">
                                            {item.tipo}
                                        </span>

                                        <br/>

                                        <a
                                            href={item.link_oficial}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="button is-link is-fullwidth"
                                        >
                                            Site Oficial
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </>
    );

}

export default InterDetalhes;