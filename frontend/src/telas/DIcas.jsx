import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import '../css/dicas.css'


function Dicas() {

    // expressoes idiomaticas
    
    const [expressoes, setExpressoes] = useState([])

    const [abertas, setAbertas] = useState({});

    const [filtro, setFiltro] = useState("todos");

    useEffect(()=> {
        fetch("http://localhost:8000/expressoes")
        .then((res) => res.json())
        .then((dados) => {
            console.log("expressoes recebidas", dados)
            setExpressoes(dados)
        })
        .catch(err => {
            console.error("Erro ao buscar expressões:", err);
        });
    }, [])

    // experiencias

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
    }, []);

    // Form - experiências

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
            <section className="hero-dicas">
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>Seu guia para explorar novos destinos</h1>

                    <h2>
                        Informações, expressões e experiências para aproveitar
                        melhor sua jornada pela América Latina.
                    </h2>
                </div>
            </section>
            <section id="filtro">
                <h2>O que você quer explorar?</h2>

                <p>
                    Escolha uma categoria para encontrar as dicas que mais combinam
                    com a sua jornada.
                </p>

                <div className="filtro-botoes">

                    <button className={filtro === "todos" ? "ativo" : ""} onClick={() => {
                        setFiltro("todos");
                        getRelatos();
                    }}>
                        Todas as dicas
                    </button>

                    <button className={filtro === "aeroporto" ? "ativo" : ""} onClick={() => setFiltro("aeroporto")}>
                        Chegada ao aeroporto
                    </button>

                    <button className={filtro === "idioma" ? "ativo" : ""} onClick={() => setFiltro("idioma")}>
                        Expressões idiomáticas
                    </button>

                    <button className={filtro === "experiencias" ? "ativo" : ""} onClick={() => {
                        setFiltro("experiencias");
                        getRelatos();
                    }}>
                        Experiências de intercambistas
                    </button>

                </div>
            </section>
            {(filtro === "todos" || filtro === "aeroporto") && (
                <section id="aeroporto">

                </section>
            )}
            {(filtro === "todos" || filtro === "idioma") && (
                <section id="idioma">
                    <h2>Expressões Idiomáticas</h2>
                    <p className="descricao-idioma">
                        Algumas expressões podem ter significados bem diferentes
                        do que parecem. Descubra como os países da América Latina
                        usam a língua no dia a dia!
                    </p>
                    <ol className="lista">
                        {expressoes.map((expressao) => (
                            <li key={expressao.id} className="LI">
                                <strong>{expressao.texto}</strong>
                                <button className="botao-significado"
                                    onClick={() =>
                                        setAbertas({
                                        ...abertas,
                                        [expressao.id]: !abertas[expressao.id]
                                        })
                                    }
                                    >
                                    {abertas[expressao.id] ? <SlArrowUp /> : <SlArrowDown />}
                                </button>
                                {abertas[expressao.id] && (
                                <p>{expressao.significado}</p>
                                )}
                            </li>
                        ))}
                    </ol>
                </section>
            )}
            {(filtro === "todos" || filtro === "experiencias") && (
                <section id="experiencias">

                    <h2>Experiências de intercambistas</h2>

                    <p>
                        Compartilhe momentos, descobertas e aprendizados do seu intercâmbio
        e ajude outros estudantes a se prepararem para viver essa experiência!
                    </p>

                    <div className="experiencias-container">

                        {relatos.map((experiencia) => (

                            <article
                                className="card-experiencia"
                                key={experiencia.id}
                            >

                                <h3>{experiencia.titulo}</h3>

                                <p>{experiencia.texto}</p>

                                <div className="info-experiencia">
                                    <span>
                                        País: {experiencia.id_pais}
                                    </span>

                                    <span>
                                        {experiencia.data}
                                    </span>
                                </div>

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


                        <button type="submit">
                            Enviar experiência
                        </button>

                    </form>

                </section>
            )}
        </>
    )
}

export default Dicas;