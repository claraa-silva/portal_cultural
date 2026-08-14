import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="navbar-content">

        <Link to="/" className="navbar-logo">
          <div>
            <span className="navbar-logo-title">
              Portal Cultural
            </span>

            <span className="navbar-logo-subtitle">
              América Latina
            </span>
          </div>
        </Link>

        <nav>
          <ul className="navbar-links">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/intercambios">Intercâmbios</Link>
            </li>

            <li>
              <Link to="/dicas">Dicas</Link>
            </li>

            <li>
              <Link to="/eventos">Eventos</Link>
            </li>

          </ul>
        </nav>

        <Link to="/destinos" className="navbar-button">
          Explorar
        </Link>

      </div>

    </header>
  );
}