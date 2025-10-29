import { Link, useNavigate } from "react-router-dom";
import admIcon from "../assets/adm.png";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de login bem-sucedido (posteriormente substituir por integração com backend)
    if (email && senha) {
      navigate("/admin/dashboard"); // ✅ Redireciona corretamente para o dashboard
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-blue-400 to-blue-600">
      {/* Header */}
      <header className="bg-white flex justify-center items-center py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <img src={logo} alt="PITE Logo" className="w-12" />
          <div>
            <h1 className="text-yellow-400 font-bold text-lg">PITE</h1>
            <p className="text-gray-600 text-sm -mt-1">
              Transporte Escolar Inteligente
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
          <img src={admIcon} alt="Administrador" className="w-14 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            Acesso do Administrador
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Bem-vindo, Administrador! Gerencie o sistema com segurança.
          </p>

          {/* Formulário de login */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <label className="text-gray-700 text-sm font-semibold">
              E-mail ou CPF
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="text-gray-700 text-sm font-semibold">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Link
              to="/recuperar-senha"
              className="text-blue-700 hover:underline text-sm"
            >
              Esqueci minha senha
            </Link>

            <button
              type="submit"
              className="bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
            >
              Entrar
            </button>

            <p className="text-gray-600 text-sm text-center">
              Não tem uma conta?{" "}
              <Link
                to="/cadastro-admin"
                className="text-blue-700 font-semibold hover:underline"
              >
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
      <footer className="bg-white text-gray-700 text-center py-4 text-sm border-t">
        © 2025 PITE. Todos os direitos reservados. |{" "}
        <Link to="#" className="hover:underline">
          Política de Privacidade
        </Link>{" "}
        |{" "}
        <Link to="/fale-conosco" className="hover:underline">
          Contato
        </Link>
      </footer>
    </div>
  );
}