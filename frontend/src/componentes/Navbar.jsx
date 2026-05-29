import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black/40 text-white z-50 backdrop-blur-sm">

      <div className="flex items-center justify-between px-10 py-4">

        {/* Logo */}
        <p className="text-lg font-bold">Visit Portal Cultural</p>

        {/* Menu central */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-8 text-sm tracking-wide">

            <li className="relative group">
              <Link to="/" className="!text-white font-bold">Home</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link to="/bolsas">Bolsas</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link to="/dicas" className="!text-white font-bold">Dicas</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link to="/eventos" className="!text-white font-bold">Eventos</Link>
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