import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function Dicas() {
    
    const [dicas, setDicas] = useState([])

    useEffect(()=> {
        fetch("http://localhost:8000/paises")
        .then((res) => res.json())
        .then((dados) => {
            setDicas(dados)
        })
    }, [])

    return(
        <>
            {/* <h1>Dicas</h1>
            <div className="navbar-item has-dropdown is-hoverable"></div>
            <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Docs</a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">Overview</a>
                        <a className="navbar-item">Elements</a>
                        <a className="navbar-item">Components</a>
                        <hr className="navbar-divider"/>
                        <div className="navbar-item">
                            Version 1.0.4
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navbar-item has-dropdown is-active"></div> */}

            <div className="columns is-multiline is-centered p-6">

            {dicas.map((dicas) => (

                <div className="column is-3" key={dicas.id}>

                    <Link to={`/dicas/${dicas.id}`}>

                        <div className="card">

                            <div className="card-content">
                                <p className="title is-4">
                                    {dicas.texto}
                                </p>
                            </div>

                        </div>

                    </Link>

                </div>

            ))}

            </div>
        </>
    )
}

export default Dicas;