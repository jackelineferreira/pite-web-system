import adminIcon from "/src/assets/adminIcon.png";
import studentIcon from "/src/assets/studentIcon.png";
import driverIcon from "/src/assets/driverIcon.png";
import administrador from "/src/assets/administrador.jpg";
import estudante from "/src/assets/estudantes.jpg";
import motorista from "/src/assets/motorista.jpeg";

export default function Oferecemos() {
  return (
    <div className="bg-gray-50">
      {/* 🔹 Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/src/assets/motorista.jpeg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>

        <div className="relative z-10 px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            O que Oferecemos
          </h1>
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Soluções completas em tecnologia para transformar o transporte escolar
            da sua cidade
          </p>
        </div>
      </section>

      {/* 🔹 Plataformas Integradas */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">
          Plataformas Integradas
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {/* Portal do Administrador */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <img src={adminIcon} alt="Administrador" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Portal do Administrador
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Gestão completa de motoristas, alunos e rotas com relatórios em tempo real.
            </p>
            <ul className="text-left text-gray-700 text-sm space-y-1">
              <li>• Centralização de operações</li>
              <li>• Relatórios e monitoramento</li>
              <li>• Análise de desempenho</li>
              <li>• Controle de usuários e acesso</li>
            </ul>
          </div>

          {/* App do Estudante */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <img src={studentIcon} alt="Estudante" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              App do Estudante
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Aplicativo móvel para acompanhar horários, rotas e notificações em tempo real.
            </p>
            <ul className="text-left text-gray-700 text-sm space-y-1">
              <li>• Horários e trajetos atualizados</li>
              <li>• Notificações de embarque e chegada</li>
              <li>• Cartão digital do aluno</li>
              <li>• Interface simples e intuitiva</li>
            </ul>
          </div>

          {/* Portal do Motorista */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <img src={driverIcon} alt="Motorista" className="w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Portal do Motorista
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Ferramenta dedicada para motoristas com rotas otimizadas e comunicação direta.
            </p>
            <ul className="text-left text-gray-700 text-sm space-y-1">
              <li>• Planejamento de viagens</li>
              <li>• Acompanhamento de alunos</li>
              <li>• Comunicação com gestores</li>
              <li>• Registro de presença automatizado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 Conheça Cada Plataforma */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">
          Conheça Cada Plataforma em Detalhes
        </h2>

        <div className="max-w-6xl mx-auto space-y-20 px-6">

          {/* Administrador */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={administrador}
              alt="Administrador"
              className="rounded-2xl shadow-md"
            />
            <div>
              <span className="text-sm text-blue-600 font-semibold uppercase">
                Controle total em suas mãos
              </span>
              <h3 className="text-2xl font-semibold text-blue-800 mt-2 mb-4">
                Portal do Administrador
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Relatórios e monitoramento completo</li>
                <li>• Acesso em tempo real às operações</li>
                <li>• Visibilidade sobre motoristas e presença</li>
                <li>• Controle de escolas e alunos</li>
              </ul>
            </div>
          </div>

          {/* Estudante */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm text-green-600 font-semibold uppercase">
                Segurança e tranquilidade para os alunos
              </span>
              <h3 className="text-2xl font-semibold text-green-700 mt-2 mb-4">
                Aplicativo do Estudante
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Informações atualizadas de embarque e desembarque</li>
                <li>• Notificações automáticas de chegada</li>
                <li>• Visualização de rotas em tempo real</li>
                <li>• Interface moderna e intuitiva</li>
              </ul>
            </div>
            <img
              src={estudante}
              alt="Estudante"
              className="rounded-2xl shadow-md order-1 md:order-2"
            />
          </div>

          {/* Motorista */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={motorista}
              alt="Motorista"
              className="rounded-2xl shadow-md"
            />
            <div>
              <span className="text-sm text-orange-600 font-semibold uppercase">
                Tecnologia que facilita o trabalho
              </span>
              <h3 className="text-2xl font-semibold text-orange-700 mt-2 mb-4">
                Portal do Motorista
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Planejamento de rotas otimizado</li>
                <li>• Comunicação com gestores em tempo real</li>
                <li>• Registro automático de presença</li>
                <li>• Aplicativo leve e fácil de usar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA final */}
      <section className="py-16 bg-[#172E5B] text-center text-white mb-0">
        <h2 className="text-2xl font-semibold mb-6">
          Pronto para modernizar o transporte escolar da sua cidade?
        </h2>
      </section>
    </div>
  );
}