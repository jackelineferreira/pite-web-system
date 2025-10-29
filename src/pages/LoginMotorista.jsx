import { Link } from "react-router-dom";
import motoristaIcon from "../assets/transporte.png";
import logo from "../assets/logo.png";

export default function LoginMotorista() {
  return (
    <div className="bg-gradient-to-b from-orange-500 to-orange-700 min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <img src={logo} alt="PITE Logo" className="w-10" />
          <div>
            <h1 className="text-yellow-400 font-bold text-lg">PITE</h1>
            <p className="text-gray-600 text-sm -mt-1">
              Transporte Escolar Inteligente
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
          <img
            src={motoristaIcon}
            alt="Motorista"
            className="w-14 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            Acesso do Motorista
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Bem-vindo, Motorista! Acompanhe suas rotas e presenças.
          </p>

          <form className="flex flex-col gap-4 text-left">
            <label className="text-gray-700 text-sm font-semibold">
              E-mail ou CPF
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <label className="text-gray-700 text-sm font-semibold">Senha</label>
            <input
              type="password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <Link
              to="/recuperar-senha"
              className="text-blue-700 hover:underline text-sm"
            >
              Esqueci minha senha
            </Link>

            <button className="bg-orange-700 text-white py-2 rounded-lg font-semibold hover:bg-orange-600">
              Entrar
            </button>

            <p className="text-gray-600 text-sm text-center">
              Não tem uma conta?{" "}
              <Link to="#" className="text-orange-700 font-semibold">
                Cadastre-se
              </Link>
            </p>
          </form>

          <Link
            to="/acesso"
            className="block mt-6 text-sm text-gray-500 hover:underline"
          >
            Voltar à seleção de perfil
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-950 text-white text-center py-4 text-sm">
        © 2025 PITE. Todos os direitos reservados. | Política de Privacidade | Contato
      </footer>
    </div>
  );
}