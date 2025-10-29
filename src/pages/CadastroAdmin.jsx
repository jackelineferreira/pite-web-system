import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function CadastroAdmin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    cargo: "",
    email: "",
    telefone: "",
    instituicao: "",
    senha: "",
    confirmarSenha: "",
  });

  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErro(""); // limpa erro ao digitar
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚠️ Validação simples
    if (
      !formData.nome ||
      !formData.cpf ||
      !formData.email ||
      !formData.senha ||
      !formData.confirmarSenha
    ) {
      setErro("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setErro("As senhas não coincidem. Tente novamente.");
      return;
    }

    // Simulação de cadastro bem-sucedido
    console.log("Administrador cadastrado:", formData);

    // ✅ Redireciona para o perfil do administrador
    navigate("/admin-perfil");
  };

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

      {/* Main content */}
      <main className="flex justify-center items-center flex-1 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Cadastro de Administrador
            </h2>
            <p className="text-gray-500 text-sm">
              Acesse o portal para gerenciar rotas, alunos e motoristas.
            </p>
          </div>

          {/* Exibe mensagem de erro */}
          {erro && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm mb-4">
              {erro}
            </div>
          )}

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Nome completo
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                CPF
              </label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="000.000.000-00"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Cargo / Função
              </label>
              <input
                type="text"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Coordenador ou Diretor"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                E-mail institucional
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="exemplo@escola.com.br"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Telefone profissional
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Órgão / Instituição / Escola
              </label>
              <input
                type="text"
                name="instituicao"
                value={formData.instituicao}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Nome da instituição"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Digite sua senha"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Confirmar senha
              </label>
              <input
                type="password"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Confirme sua senha"
              />
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Cadastrar Administrador
              </button>

              <p className="text-sm text-gray-600 mt-4">
                Já possui conta?{" "}
                <Link
                  to="/login-admin"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Fazer login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}