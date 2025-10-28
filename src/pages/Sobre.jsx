import React from "react";
import youtubeLogo from "../assets/youtube-logo.png";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";

export default function Sobre() {
  return (
    <div className="bg-gray-50">
      {/* Seção Hero */}

      <section
        className="text-white text-center py-24 px-6"
        style={{
          background: "linear-gradient(90deg, #1E90FF 0%, #63B3ED 100%)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nosso propósito: tornar o transporte escolar mais{" "}
          <span className="text-yellow-400">seguro, eficiente e inteligente.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-blue-50">
          Unindo tecnologia, gestão e responsabilidade para conectar alunos,
          motoristas e escolas.
        </p>
      </section>

      {/* Seção 1: Missão, Valores e Visão */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {/* Missão */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
            <img
              src="/src/assets/missao.png"
              alt="Ícone Missão"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Missão</h3>
            <p className="text-gray-600">
              Proporcionar mobilidade escolar segura e eficiente com tecnologia.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
            <img
              src="/src/assets/valores.png"
              alt="Ícone Valores"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Valores</h3>
            <p className="text-gray-600">
              Ser referência nacional em soluções inteligentes de transporte escolar.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
            <img
              src="/src/assets/visao.png"
              alt="Ícone Visão"
              className="w-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Visão</h3>
            <p className="text-gray-600">
              Integrar tecnologia, transparência e acessibilidade no transporte escolar.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 2: Por que escolher o PITE? */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Por que escolher o PITE?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Uma plataforma completa que atende todas as necessidades do transporte escolar.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src="/src/assets/motorista.jpeg"
                alt="Rota Segura"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Rota Segura
                </h3>
                <p className="text-gray-600">
                  Planejamento inteligente de trajetos com acompanhamento em tempo real
                  e registro de paradas.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src="/src/assets/aluno.jpg"
                alt="Aluno Digital"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Aluno Digital
                </h3>
                <p className="text-gray-600">
                  Cada estudante tem acesso individual às informações da sua rota e
                  notificações em tempo real.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src="/src/assets/lista.jpg"
                alt="Presença Inteligente"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Presença Inteligente
                </h3>
                <p className="text-gray-600">
                  Registro automático de presença e ausência com comunicação instantânea
                  entre escola e responsáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Nosso Impacto e Reconhecimento */}
<section className="bg-blue-50 py-20">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-blue-800 mb-12">
      Nosso Impacto e Reconhecimento
    </h2>

    {/* Cards de impacto */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
        <img
          src="/src/assets/managementIcon.png"
          alt="Satisfação dos Usuários"
          className="w-12 mx-auto mb-4"
        />
        <h3 className="text-3xl font-bold text-blue-700 mb-2">98%</h3>
        <p className="text-gray-600">Satisfação dos Usuários</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
        <img
          src="/src/assets/studentIcon.png"
          alt="Alunos Transportados"
          className="w-12 mx-auto mb-4"
        />
        <h3 className="text-3xl font-bold text-blue-700 mb-2">+5.000</h3>
        <p className="text-gray-600">Alunos Transportados</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
        <img
          src="/src/assets/driverIcon.png"
          alt="Motoristas Cadastrados"
          className="w-12 mx-auto mb-4"
        />
        <h3 className="text-3xl font-bold text-blue-700 mb-2">+300</h3>
        <p className="text-gray-600">Motoristas Cadastrados</p>
      </div>
    </div>

    {/* Botões */}
    <div className="flex flex-wrap justify-center gap-4">
      <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition">
        Inovação na Mobilidade Escolar 2025
      </button>
      <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition">
        Tecnologia a Serviço da Educação
      </button>
      <button className="bg-white text-blue-700 font-medium px-6 py-3 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition">
        Compromisso com a Segurança
      </button>
    </div>
  </div>
</section>

{/* Seção 4: Chamada Final */}
<section className="py-16 bg-[#172E5B] text-center text-white mb-0">
  <div className="container mx-auto px-6">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">
      Acreditamos em um transporte escolar
      <br /> mais humano, seguro e conectado.
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
      Estamos em constante evolução para transformar a mobilidade escolar em
      todo o Brasil.
    </p>
  </div>
</section>
</div>
  );
}
