import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home, Users, Bus, MapPin, CalendarCheck, Bell, Settings,
} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import defaultUser from "../assets/administrador.jpg"; 
export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const adminFoto = null; 
  const adminNome = "Administrador";

  const handleLogout = () => {
    localStorage.removeItem("adminLogado");
    navigate("/acesso");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col py-6">
        <div className="flex items-center justify-center mb-8">
          <img src={logo} alt="PITE Logo" className="w-10" />
          <div className="ml-2">
            <h1 className="font-bold text-lg text-yellow-400">PITE</h1>
            <p className="text-xs text-gray-200 -mt-1">Painel do Administrador</p>
          </div>
        </div>

        <nav className="flex flex-col space-y-1 px-4">
          <Link
            to="/admin/dashboard"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              location.pathname === "/admin/dashboard"
                ? "bg-yellow-400 text-blue-900 font-semibold"
                : "hover:bg-blue-800"
            }`}
          >
            <Home className="w-5 h-5" /> Dashboard
          </Link>

          <Link
            to="/admin/gestao-alunos"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              location.pathname === "/admin/gestao-alunos"
                ? "bg-yellow-400 text-blue-900 font-semibold"
                : "hover:bg-blue-800"
            }`}
          >
            <Users className="w-5 h-5" /> Gestão de Alunos
          </Link>

          <Link
            to="/admin/gestao-veiculos"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              location.pathname === "/admin/gestao-veiculos"
                ? "bg-yellow-400 text-blue-900 font-semibold"
                : "hover:bg-blue-800"
            }`}
          >
            <Bus className="w-5 h-5" /> Gestão de Veículos
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow flex justify-end items-center px-6 py-3 relative">
          <div className="relative">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src={adminFoto || defaultUser}
                alt="Admin"
                className="w-8 h-8 rounded-full border-2 border-blue-600"
              />
              <span className="text-blue-700 font-semibold">{adminNome}</span>
            </button>

            {menuAberto && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <Link
                  to="/admin/perfil"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuAberto(false)}
                >
                  Perfil do Administrador
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Conteúdo principal */}
        <div className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}