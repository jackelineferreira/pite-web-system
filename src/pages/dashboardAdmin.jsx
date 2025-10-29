import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Bus, CalendarCheck, PlusCircle, X } from "lucide-react";

export default function DashboardAdmin() {
  const [showModal, setShowModal] = useState(false);

  const presencaSemanal = [
    { dia: "Seg", presencas: 120 },
    { dia: "Ter", presencas: 132 },
    { dia: "Qua", presencas: 110 },
    { dia: "Qui", presencas: 145 },
    { dia: "Sex", presencas: 138 },
  ];

  const veiculosPorRota = [
    { rota: "Norte", ativos: 10 },
    { rota: "Sul", ativos: 8 },
    { rota: "Leste", ativos: 12 },
    { rota: "Oeste", ativos: 9 },
    { rota: "Centro", ativos: 6 },
  ];

  return (
    <main className="flex-1 p-8 bg-gray-100 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Olá, João Silva</h2>

        <Link
          to="/admin/perfil"
          className="flex items-center gap-2 hover:opacity-90 transition cursor-pointer"
        >
          <div className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold">
            A
          </div>
          <span className="text-blue-900 font-medium">Administrador</span>
        </Link>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total de Alunos</p>
          <h3 className="text-2xl font-bold text-blue-700">1.284</h3>
          <p className="text-xs text-green-500 mt-1">+2% este mês</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Motoristas em Operação</p>
          <h3 className="text-2xl font-bold text-blue-700">42</h3>
          <p className="text-xs text-green-500 mt-1">+5% esta semana</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Veículos em Trânsito</p>
          <h3 className="text-2xl font-bold text-blue-700">28</h3>
          <p className="text-xs text-green-500 mt-1">+3% hoje</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Presenças Hoje</p>
          <h3 className="text-2xl font-bold text-blue-700">1.142</h3>
          <p className="text-xs text-green-500 mt-1">+10% hoje</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-gray-700 font-semibold mb-2">
            Tendência de Presença Semanal
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={presencaSemanal}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="presencas" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-gray-700 font-semibold mb-2">Veículos Ativos por Rota</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={veiculosPorRota}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="rota" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ativos" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ocorrências e Acesso Rápido */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-gray-700 font-semibold mb-3">Ocorrências Recentes</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="border-b pb-2">Aluno ausente sem justificativa — 08:30h</li>
            <li className="border-b pb-2">Veículo fora da rota — 09:10h</li>
            <li className="border-b pb-2">Nova reclamação registrada — 10:45h</li>
            <li>Notificação pendente — 11:00h</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h4 className="text-gray-700 font-semibold mb-3">Acesso Rápido</h4>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center gap-2 bg-blue-700 text-white rounded-lg py-2 font-medium hover:bg-blue-800"
            >
              <PlusCircle className="w-5 h-5" /> Cadastrar Aluno
            </button>

            <button className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-lg py-2 font-medium hover:bg-green-700">
              <Bus className="w-5 h-5" /> Registrar Veículo
            </button>

            <button className="flex items-center justify-center gap-2 bg-yellow-500 text-blue-900 rounded-lg py-2 font-medium hover:bg-yellow-400">
              <CalendarCheck className="w-5 h-5" /> Ver Relatórios
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Cadastro de Aluno */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Cadastrar Novo Aluno
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Preencha os dados do aluno
            </p>

            <form className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="Nome Completo" />
              <input className="border p-2 rounded" placeholder="Matrícula" />
              <input className="border p-2 rounded" placeholder="Data de Nascimento" type="date" />
              <input className="border p-2 rounded" placeholder="Série" />
              <input className="border p-2 rounded" placeholder="Turma" />
              <input className="border p-2 rounded" placeholder="Endereço Completo" />
              <input className="border p-2 rounded" placeholder="CPF do Responsável" />
              <input className="border p-2 rounded" placeholder="Telefone de Contato" />
              <input className="border p-2 rounded col-span-2" placeholder="E-mail" />
            </form>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
                Cadastrar Aluno
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}