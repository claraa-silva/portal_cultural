import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black/40 text-white z-50 backdrop-blur-sm">

      <div className="flex items-center justify-between px-10 py-4">

        {/* Logo */}
        <h1 className="text-lg font-bold">Visit USA</h1>

        {/* Menu central */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-8 text-sm tracking-wide">

            <li className="relative group">
              <Link to="/">Home</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link to="/destinos">Destinos</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link to="/experiencias">Experiências</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link to="/dicas">Dicas</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link to="/eventos">Eventos</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>

          </ul>
        </nav>

        <div className="w-[80px]"></div>
      </div>

      <div className="w-full h-[1px] bg-white/30"></div>
    </header>
  );
}