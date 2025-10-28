import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import aboutImage from "../assets/aboutImage.png";

// Ícones
import adminIcon from "../assets/adminIcon.png";
import studentIcon from "../assets/studentIcon.png";
import driverIcon from "../assets/driverIcon.png";
import gpsIcon from "../assets/gpsIcon.png";
import alertIcon from "../assets/alertIcon.png";
import managementIcon from "../assets/managementIcon.png";

export default function Home(){
  return (
    <div className="bg-gray-50">
      {/* === Seção Hero (Banner) === */}
      <HeroSection />

      {/* === Seção 1: Escolha seu Perfil === */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Escolha seu Perfil de Acesso
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Administrador */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-md hover:shadow-lg p-8 transition transform hover:-translate-y-1">
              <img
                src={adminIcon}
                alt="Ícone Administrador"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                Administrador
              </h3>
              <p className="text-gray-600 mb-6">
                Gerencie rotas, monitore frota e acompanhe indicadores em tempo real.
              </p>
              <Link
                to="/login-admin"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Acessar
              </Link>
            </div>

            {/* Estudante */}
            <div className="bg-green-50 border border-green-200 rounded-xl shadow-md hover:shadow-lg p-8 transition transform hover:-translate-y-1">
              <img
                src={studentIcon}
                alt="Ícone Estudante"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                Estudante
              </h3>
              <p className="text-gray-600 mb-6">
                Acompanhe seu ônibus em tempo real e receba notificações inteligentes.
              </p>
              <Link
                to="/login-estudante"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Acessar
              </Link>
            </div>

            {/* Motorista */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl shadow-md hover:shadow-lg p-8 transition transform hover:-translate-y-1">
              <img
                src={driverIcon}
                alt="Ícone Motorista"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-orange-700 mb-3">
                Motorista
              </h3>
              <p className="text-gray-600 mb-6">
                Acesse suas rotas, liste passageiros e registre presença com facilidade.
              </p>
              <Link
                to="/login-motorista"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                Acessar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === Seção 2: Tecnologia === */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Tecnologia que simplifica o transporte escolar da sua cidade
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src={gpsIcon}
                alt="Ícone de GPS"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Monitoramento em tempo real
              </h3>
              <p className="text-gray-600">
                Rastreamento GPS dos ônibus, otimização de rotas e atualizações instantâneas sobre atrasos ou mudanças no trajeto.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src={alertIcon}
                alt="Ícone de alerta"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Alertas inteligentes
              </h3>
              <p className="text-gray-600">
                Interface intuitiva que permite aos estudantes acompanhar rotas, horários e receber notificações em tempo real sobre o transporte.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src={managementIcon}
                alt="Ícone de gestão"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Gestão completa e produtiva
              </h3>
              <p className="text-gray-600">
                Painel administrativo robusto com relatórios, controle de frota, gestão de motoristas e análise de dados operacionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Seção 3: Sobre o PITE === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Imagem */}
          <div className="md:w-1/2">
            <img
              src={aboutImage}
              alt="Sobre o PITE"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Texto com destaque lateral */}
          <div className="md:w-1/2 border-l-4 border-blue-600 pl-8 bg-blue-50/30 rounded-xl shadow-md p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Sobre o PITE
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed text-justify max-w-prose">
              <p style={{ textIndent: "2rem" }}>
                A <span className="font-semibold text-blue-700">PITE — Plataforma Inteligente de Transporte Escolar</span> surgiu para modernizar e tornar mais seguro o transporte escolar público, unindo tecnologia, eficiência e acessibilidade.  
                A solução conecta alunos, motoristas e gestores municipais em um único sistema, permitindo o controle digital de presença, a comunicação em tempo real e a gestão simplificada das rotas e veículos.
              </p>

              <p style={{ textIndent: "2rem" }}>
                Com a PITE, os alunos têm mais segurança, os motoristas trabalham com mais organização e os gestores tomam decisões baseadas em dados.  
                Cada trajeto é acompanhado com responsabilidade e transparência, promovendo uma experiência de transporte mais humana, eficiente e conectada.
              </p>

              <p style={{ textIndent: "2rem" }}>
                Nosso objetivo é simplificar a gestão do transporte escolar, garantindo segurança, pontualidade e confiança para toda a comunidade escolar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Seção 4: Contato / CTA === */}
      <section className="py-16 bg-[#172E5B] text-center text-white mb-0">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para revolucionar o transporte escolar da sua cidade?
        </h2>
        <p className="text-gray-200 mb-8">
          Trabalhamos com tecnologia, inovação e compromisso com a educação.
        </p>
        <Link to="/fale-conosco">
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Fale Conosco
          </button>
        </Link>
      </section>
    </div>
  );
}
