import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import '../css/dicas.css'


function Dicas() {
    
    const [expressoes, setExpressoes] = useState([])

    const [abertas, setAbertas] = useState({});

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
            <section id="aeroporto">

            </section>
            <section id="idioma">
                <h2>Expressões Idiomáticas</h2>
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
            <section id="experiencias">

            </section>
        </>
    )
}

export default Dicas;