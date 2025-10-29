import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import adminIcon from "../assets/adminIcon.png";
import studentIcon from "../assets/studentIcon.png";
import driverIcon from "../assets/driverIcon.png";

export default function Acesso() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Header simples */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img src={logo} alt="PITE Logo" className="w-10" />
          <h1 className="text-blue-700 font-bold text-lg">
            Transporte Escolar Inteligente
          </h1>
        </div>
        <Link
          to="/"
          className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300"
        >
          Voltar ao Início
        </Link>
      </header>

      {/* Conteúdo principal */}
      <main className="flex flex-col items-center text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
          Bem-vindo ao PITE
        </h2>
        <p className="text-gray-600 mb-12">
          Selecione seu tipo de acesso para continuar
        </p>

        <div className="grid md:grid-cols-3 gap-10 w-full max-w-5xl">
          {/* Administrador */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
            <img src={adminIcon} alt="Administrador" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Administrador</h3>
            <p className="text-gray-600 mb-6">
              Gerencie rotas, alunos e motoristas
            </p>
            <Link
              to="/login-admin"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 inline-block"
            >
              Entrar
            </Link>
          </div>

          {/* Aluno */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
            <img src={studentIcon} alt="Aluno" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Aluno</h3>
            <p className="text-gray-600 mb-6">
              Acompanhe horários e rotas de transporte
            </p>
            <Link
              to="/login-aluno"
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600 inline-block"
            >
              Entrar
            </Link>
          </div>

          {/* Motorista */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-600">
            <img src={driverIcon} alt="Motorista" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Motorista</h3>
            <p className="text-gray-600 mb-6">
              Gerencie suas rotas e presenças
            </p>
            <Link
              to="/login-motorista"
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-500 inline-block"
            >
              Entrar
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-4 text-sm">
        © 2025 PITE. Todos os direitos reservados.
      </footer>
    </div>
  );
}