function Navbar(){


    return(
        <nav className="navbar">
            <div className="logo">MeuSite</div>
            
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;