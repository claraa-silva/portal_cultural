import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function InterDetalhes() {
    const { id } = useParams();
    const [inter, setInter] = useState([]);

    useEffect(() => {
        AOS.init({ once: true });

        fetch(`http://localhost:8000/intercambios/${id}`)
            .then(res => res.json())
            .then(data => {
                // garante que SEMPRE é array
                setInter(Array.isArray(data) ? data : []);
            })
            .catch(err => console.log(err));
    }, [id]);

    if (inter.length === 0) {
        return (
            <section className="hero is-white is-fullheight">
                <div className="hero-body has-text-centered">
                    <div className="container">
                        <h1 className="title">Carregando intercâmbios...</h1>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* HERO INTRO */}
            <section className="hero is-white is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered reverse-columns">

                            <div className="column is-5" data-aos="fade-down">
                                <h1 className="title is-1 mb-6">
                                    Intercâmbios disponíveis
                                </h1>

                                <h2 className="subtitle">
                                    Explore universidades, programas e oportunidades de estudo no exterior.
                                </h2>

                                <div className="buttons">
                                    <button className="button is-warning">
                                        Universidades
                                    </button>
                                    <button className="button">
                                        Programas
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* LISTA */}
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline">

                        {inter.map(item => (
                            <div className="column is-4" key={item.id} data-aos="fade-up">

                                <div className="card" style={{ borderRadius: "12px" }}>

                                    <div className="card-content">
                                        <p className="title is-4">
                                            {item.universidade}
                                        </p>

                                        <p className="subtitle is-6">
                                            {item.programa}
                                        </p>

                                        <p>
                                            🌎 País: <strong>{item.pais_id}</strong>
                                        </p>

                                        <p>
                                            ⏳ Duração: {item.duracao_meses} meses
                                        </p>

                                        <p>
                                            🎓 Vagas: {item.vagas}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

export default InterDetalhes;