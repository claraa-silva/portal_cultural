import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import '../css/experiencias.css'

function Experiencias() {
    const [paises, setPaises] = useState([]);

    const [experiencia, setExperiencia] = useState({
        id_pais: "",
        nome: "",
        titulo: "",
        texto: ""
    });

    const [relatos, setRelatos] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/paises")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Erro ao buscar países");
                }
    
                return res.json();
            })
            .then(data => {
                console.log("Países recebidos:", data);
                setPaises(data);
            })
            .catch(error => {
                console.error("Erro ao buscar países:", error);
            });
        getRelatos();
    }, []);

    // Formulário

    function handleChange(e) {
        const { name, value } = e.target;
    
        setExperiencia({
            ...experiencia,
            [name]: value
        });
    }
    
    function enviarExperiencia(e) {
        e.preventDefault();

        console.log("DADOS DO FORMULÁRIO:", experiencia);
    
        fetch(`http://localhost:8000/experiencias/${experiencia.id_pais}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: experiencia.titulo,
                texto: experiencia.texto,
                nome: experiencia.nome
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Erro ao cadastrar experiência");
                }
    
                return res.json();
            })
            .then(data => {
                console.log("Experiência cadastrada:", data);
    
                setExperiencia({
                    id_pais: "",
                    titulo: "",
                    texto: "",
                    nome: ""
                });
    
                alert("Experiência enviada com sucesso! :)");
            })
            .catch(error => {
                console.error("Erro:", error);
            });
    }

    
    function chamar(){
        location.reload();
    }
    
    function formatarData(data){
        let lista = data.split("T");
        let novaData = lista[0].split("-");
        let dia = novaData[2];
        let mes = novaData[1]
        let ano = novaData[0];
        novaData = `${dia}/${mes}/${ano}`;
        return novaData;
    }
    
    function getRelatos(){
        fetch(`http://localhost:8000/experiencias`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Erro ao buscar relatos");
                }

                return res.json();
            })
            .then(data => {
                console.log("Relatos recebidos:", data);
                setRelatos(data);
            })
            .catch(error => {
                console.error("Erro ao buscar relatos:", error);
            });
    }
    return(
        <>
            <section className="hero-experiencias">
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>Experiências de intercambistas</h1>

                    <h2>
                        Compartilhe momentos, descobertas e aprendizados do seu intercâmbio e ajude outros estudantes a se prepararem para viver essa experiência!
                    </h2>
                </div>
            </section>
            <section id="experiencias">
                
                <div className="experiencias-container">
                
                    {relatos.map((experiencia) => (

                        <article className="card experiencia-card" key={experiencia.id}>

                            <header className="card-header">
                                <p className="card-header-title">
                                    {experiencia.titulo}
                                </p>
                            </header>

                            <div className="card-content">
                                <div className="content">
                                    <p>
                                        {experiencia.texto}
                                    </p>
                                </div>
                            </div>

                            <footer className="card-footer">

                                <span className="card-footer-item">
                                    👤 {experiencia.nome}
                                </span>

                                <span className="card-footer-item">
                                    🌎 {experiencia.id_pais}
                                </span>

                                <span className="card-footer-item">
                                    📅 {formatarData(experiencia.data)}
                                </span>

                            </footer>

                        </article>

                    ))}

                </div>

                <form
                    className="formulario-experiencia"
                    onSubmit={enviarExperiencia}
                >

                    <div>
                        <label htmlFor="nome">
                            Seu nome:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={experiencia.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div>
                        <label htmlFor="id_pais">
                            País do intercâmbio:
                        </label>

                        <select
                            id="id_pais"
                            name="id_pais"
                            value={experiencia.id_pais}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Selecione um país
                            </option>

                            {paises.map((pais) => (
                                <option
                                    key={pais.id}
                                    value={pais.id}
                                >
                                    {pais.nome}
                                </option>
                            ))}

                        </select>
                    </div>


                    <div>
                        <label htmlFor="titulo">
                            Título da experiência:
                        </label>

                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={experiencia.titulo}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div>
                        <label htmlFor="texto">
                            Conte como foi sua experiência:
                        </label>

                        <textarea
                            id="texto"
                            name="texto"
                            value={experiencia.texto}
                            onChange={handleChange}
                            rows="6"
                            required
                        />
                    </div>


                    <button type="submit" onClick={chamar}>
                        Enviar experiência
                    </button>

                </form>

        </section>
        <section className="footer">
                <h2>Portal Cultural</h2>
                <p>Conectando culturas além das fronteiras.</p>
                <p>Plataforma desenvolvida por estudantes do IFSP • 2026</p>
        </section>
    </>
    )
}

export default Experiencias;