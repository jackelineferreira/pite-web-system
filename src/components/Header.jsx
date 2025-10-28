import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";


export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/*Logo*/}
        <Link to="/" className="flex items-center gap-2">
        <img
            src={logo}
            alt="Logo PITE"
            className="h-10 w-auto" // ajuste o tamanho conforme necessário
          />
        </Link>

        <nav className="flex gap-6">
          <Link
            to="/"
            className={`hover:text-blue-600 ${
              pathname === "/" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className={`hover:text-blue-600 ${
              pathname === "/sobre" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Sobre o Sistema
          </Link>
          <Link
            to="/oferecemos"
            className={`hover:text-blue-600 ${
              pathname === "/oferecemos" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            O que oferecemos
          </Link>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Entrar
        </button>
      </div>
    </header>
  );
}