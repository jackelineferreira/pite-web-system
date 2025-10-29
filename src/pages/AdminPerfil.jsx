import { useState } from "react";

export default function AdminPerfil() {
  const [formData, setFormData] = useState({
    nome: "Administrador Exemplo",
    email: "admin@escola.com.br",
    telefone: "(11) 99999-9999",
    departamento: "Secretaria de Educação",
  });

  const [fotoPerfil, setFotoPerfil] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    alert("Informações salvas com sucesso!");
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(URL.createObjectURL(file));
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-8">
      {/* Cabeçalho */}
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Meu Perfil</h2>
        <div className="flex items-center gap-3">
          <span className="text-gray-700 font-medium">Administrador</span>
          <div className="bg-blue-700 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
            A
          </div>
        </div>
      </header>

      {/* Card principal */}
      <div className="space-y-6">
        {/* Informações de Perfil */}
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Informações de Perfil
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Gerencie suas informações pessoais e configurações de conta.
          </p>

          {/* Foto de perfil */}
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <img
                src={
                  fotoPerfil ||
                  "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                }
                alt="Foto de perfil"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
              />
              <label
                htmlFor="foto"
                className="absolute bottom-0 right-0 bg-blue-700 hover:bg-blue-800 text-white text-xs px-2 py-1 rounded-full cursor-pointer"
              >
                Alterar
              </label>
              <input
                type="file"
                id="foto"
                accept="image/*"
                onChange={handleFotoChange}
                className="hidden"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{formData.nome}</h4>
              <p className="text-sm text-gray-500">{formData.departamento}</p>
            </div>
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSalvar}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Departamento
              </label>
              <input
                type="text"
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </section>

        {/* Segurança da Conta */}
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Segurança da Conta
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center border p-4 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">Alterar Senha</h4>
                <p className="text-sm text-gray-500">
                  Atualize sua senha regularmente para manter sua conta segura.
                </p>
              </div>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                Alterar Senha
              </button>
            </div>

            <div className="flex justify-between items-center border p-4 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-800">
                  Autenticação de Dois Fatores
                </h4>
                <p className="text-sm text-gray-500">
                  Adicione uma camada extra de segurança à sua conta.
                </p>
              </div>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition">
                Configurar
              </button>
            </div>
          </div>
        </section>

        {/* Informações do Sistema */}
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Informações do Sistema
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold">Código do sistema:</span> ADP-2025-001
            </p>
            <p>
              <span className="font-semibold">Versão:</span> 1.0.0
            </p>
            <p>
              <span className="font-semibold">Ambiente:</span> Produção
            </p>
            <p>
              <span className="font-semibold">Administrador:</span> {formData.nome}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}