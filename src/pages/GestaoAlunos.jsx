import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiEdit2, FiTrash2, FiUserPlus, FiX } from "react-icons/fi";

const GestaoAlunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [error, setError] = useState(null);

  const [novoAluno, setNovoAluno] = useState({
    nome: "",
    dataNascimento: "",
    responsavel: "",
    telefone: "",
    endereco: "",
    serie: "",
    rota: "",
    status: "Ativo",
  });

  const [currentAluno, setCurrentAluno] = useState(null);
  const shakeRef = useRef(null);

  const triggerShake = () => {
    if (shakeRef.current) {
      shakeRef.current.classList.add("animate-shake");
      setTimeout(() => shakeRef.current.classList.remove("animate-shake"), 500);
    }
  };

  const fetchAlunos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/alunos");
      if (!response.ok) throw new Error("Erro ao buscar alunos");
      const data = await response.json();
      setAlunos(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar os alunos.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!novoAluno.nome || !novoAluno.responsavel || !novoAluno.telefone) {
      triggerShake();
      alert("Preencha os campos obrigatórios: Nome, Responsável e Telefone.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/alunos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoAluno),
      });

      if (!response.ok) throw new Error("Erro ao cadastrar aluno");
      const added = await response.json();
      setAlunos([...alunos, added]);
      alert("Aluno cadastrado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar aluno no banco de dados.");
    }

    setNovoAluno({
      nome: "",
      dataNascimento: "",
      responsavel: "",
      telefone: "",
      endereco: "",
      serie: "",
      rota: "",
      status: "Ativo",
    });
    setShowModal(false);
  };

  const handleUpdate = async () => {
    if (
      !currentAluno.nome ||
      !currentAluno.responsavel ||
      !currentAluno.telefone
    ) {
      triggerShake();
      alert("Campos obrigatórios não podem estar vazios!");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/alunos/${currentAluno.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(currentAluno),
        }
      );

      if (!response.ok) throw new Error("Erro ao atualizar aluno");

      setAlunos(
        alunos.map((aluno) =>
          aluno.id === currentAluno.id ? currentAluno : aluno
        )
      );
      alert("Alterações salvas com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar alterações no banco de dados.");
    }

    setShowEditModal(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este aluno?")) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/alunos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao excluir aluno");

      setAlunos(alunos.filter((aluno) => aluno.id !== id));
    } catch (err) {
      console.error(err);
      alert("Erro ao excluir aluno do banco de dados.");
    }
  };

  const handleEdit = (aluno) => {
    setCurrentAluno(aluno);
    setShowEditModal(true);
  };

  const filteredAlunos = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchAlunos();
  }, []);

  return (
    <div className="p-8">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestão de Alunos</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          <FiUserPlus className="mr-2" /> Adicionar Aluno
        </button>
      </div>

      {/* Busca */}
      <div className="relative w-full md:w-1/3 mb-6">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar aluno..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Mensagens */}
      {loading && <p className="text-gray-600">Carregando alunos...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Tabela */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="py-3 px-4 text-left">Nome</th>
              <th className="py-3 px-4 text-left">Responsável</th>
              <th className="py-3 px-4 text-left">Telefone</th>
              <th className="py-3 px-4 text-left">Série</th>
              <th className="py-3 px-4 text-left">Rota</th>
              <th className="py-3 px-4 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlunos.map((aluno) => (
              <tr key={aluno.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{aluno.nome}</td>
                <td className="py-3 px-4">{aluno.responsavel}</td>
                <td className="py-3 px-4">{aluno.telefone}</td>
                <td className="py-3 px-4">{aluno.serie}</td>
                <td className="py-3 px-4">{aluno.rota}</td>
                <td className="py-3 px-4 flex justify-center space-x-3">
                  <button
                    onClick={() => handleEdit(aluno)}
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <FiEdit2 />
                  </button>
                  <button
                    onClick={() => handleDelete(aluno.id)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Cadastro */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" ref={shakeRef}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Adicionar Aluno</h2>
              <button onClick={() => setShowModal(false)}>
                <FiX className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <input
              type="text"
              placeholder="Nome"
              className="w-full mb-3 p-2 border rounded"
              value={novoAluno.nome}
              onChange={(e) =>
                setNovoAluno({ ...novoAluno, nome: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Responsável"
              className="w-full mb-3 p-2 border rounded"
              value={novoAluno.responsavel}
              onChange={(e) =>
                setNovoAluno({ ...novoAluno, responsavel: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Telefone"
              className="w-full mb-3 p-2 border rounded"
              value={novoAluno.telefone}
              onChange={(e) =>
                setNovoAluno({ ...novoAluno, telefone: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Série"
              className="w-full mb-3 p-2 border rounded"
              value={novoAluno.serie}
              onChange={(e) =>
                setNovoAluno({ ...novoAluno, serie: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Rota"
              className="w-full mb-3 p-2 border rounded"
              value={novoAluno.rota}
              onChange={(e) =>
                setNovoAluno({ ...novoAluno, rota: e.target.value })
              }
            />

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestaoAlunos;