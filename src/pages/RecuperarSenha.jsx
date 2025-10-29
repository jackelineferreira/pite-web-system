import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function RecuperarSenha() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <img src={logo} alt="PITE Logo" className="w-10" />
          <div>
            <h1 className="text-blue-700 font-bold text-lg">PITE</h1>
            <p className="text-gray-600 text-sm -mt-1">
              Transporte Escolar Inteligente
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex justify-center items-center flex-1 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          {/* Ícone e título */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3m0 0v3m-3-6a9 9 0 11-9 9h6"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Recuperar Senha
            </h2>
            <p className="text-gray-500 text-sm">
              Informe seu e-mail ou CPF para redefinir sua senha.
            </p>
          </div>

          {/* Formulário */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                E-mail ou CPF
              </label>
              <input
                type="text"
                placeholder="Digite seu e-mail ou CPF"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition"
            >
              Enviar link de redefinição
            </button>
          </form>

          {/* Voltar ao login */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Lembrou sua senha?{" "}
              <Link
                to="/acesso"
                className="text-blue-700 font-semibold hover:underline"
              >
                Voltar para o login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}