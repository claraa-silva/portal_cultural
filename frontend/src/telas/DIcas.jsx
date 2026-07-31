import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";


function Dicas() {
    
    const [expressoes, setExpressoes] = useState([])

    const [abertas, setAbertas] = useState({});

    useEffect(()=> {
        fetch("http://localhost:8000/expressoes")
        .then((res) => res.json())
        .then((dados) => {
            setExpressoes(dados)
        })
    }, [])

    return(
        <>
            <section id="aeroporto">

            </section>
            <section id="idioma">
                <ol>
                    {expressoes.map((expressao) => (
                        <li key={expressao.id}>
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