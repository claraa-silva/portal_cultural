import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Intercambios() {

    const [paises, setPaises] = useState([])

    useEffect(() => {

        fetch("http://localhost:8000/paises")
            .then((res) => res.json())
            .then((dados) => {
                setPaises(dados)
            })

    }, [])

    return (
        
        <div className="columns is-multiline is-centered p-6">

            {paises.map((pais) => (

                <div className="column is-3" key={pais.id}>

                    <Link to={`/intercambios/${pais.id}`}>

                        <div className="card">

                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src={pais.imagem_url}
                                        alt={pais.nome}
                                    />
                                </figure>
                            </div>

                            <div className="card-content">
                                <p className="title is-4">
                                    {pais.nome}
                                </p>
                            </div>

                        </div>

                    </Link>

                </div>

            ))}

        </div>
    )
}

export default Intercambios