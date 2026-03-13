import React, { useState, useEffect } from "react";
import '../App.css'

export function Navbar(){

    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">NossaLogo</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Início</a></li>
                <li><a href="/servicos">Serviços</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato" className="btn-contato">Contato</a></li>
            </ul>
        </nav>
    )
}