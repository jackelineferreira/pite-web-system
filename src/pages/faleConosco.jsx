import youtubeLogo from "/src/assets/youtube-logo.png";
import facebookLogo from "/src/assets/facebook.png";
import instagramLogo from "/src/assets/instagram.png";
import linkedinLogo from "/src/assets/linkedin.png";

export default function FaleConosco() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 🔹 Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Fale Conosco</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Entre em contato com a equipe PITE. Estamos prontos para ajudar você a
          transformar o transporte escolar da sua cidade.
        </p>
      </section>

      {/* 🔹 Formulário de contato */}
      <section className="container mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Formulário */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Envie sua mensagem
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Nome completo
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Assunto
              </label>
              <input
                type="text"
                placeholder="Sobre o que deseja falar?"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Mensagem
              </label>
              <textarea
                rows="5"
                placeholder="Digite sua mensagem..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Contatos */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Informações de Contato
            </h3>
            <p className="text-gray-700">
               Rua Exemplo, 123 - São Paulo, SP
            </p>
            <p className="text-gray-700"> contato@pite.com.br</p>
            <p className="text-gray-700"> (11) 99999-9999</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Siga a PITE nas redes sociais
            </h3>
            <div className="flex justify-start gap-6 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={facebookLogo}
                  alt="Facebook"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={instagramLogo}
                  alt="Instagram"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={youtubeLogo}
                  alt="YouTube"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA final */}
      <section className="bg-blue-950 text-white text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Estamos prontos para ouvir você!
        </h2>
        <p className="text-blue-200 max-w-xl mx-auto mb-6">
          Sua mensagem é importante para nós. Entraremos em contato o mais breve
          possível.
        </p>
        <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Voltar ao Início
        </button>
      </section>
    </div>
  );
}