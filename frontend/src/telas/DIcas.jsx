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
                    }}>
                        Todas as dicas
                    </button>

                    <button className={filtro === "aeroporto" ? "ativo" : ""} onClick={() => setFiltro("aeroporto")}>
                        Chegada ao aeroporto
                    </button>

                    <button className={filtro === "idioma" ? "ativo" : ""} onClick={() => setFiltro("idioma")}>
                        Expressões idiomáticas
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
                
        </>
    )
}

export default Dicas;