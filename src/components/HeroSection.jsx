import bannerImage from "../assets/bannerImage.jpg";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Texto à esquerda */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Conectando <br />
            Estudantes com <br />
            <span className="text-white">Segurança</span> e{" "}
            <span className="text-yellow-400">Eficiência</span>
          </h1>

          <p className="text-base md:text-lg text-gray-100 mb-8">
            Tecnologia inteligente para transformar o transporte escolar em uma
            experiência segura, integrada e pontual.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Conhecer o Sistema
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={bannerImage}
            alt="Ônibus escolar e cidade"
            className="w-full max-w-lg rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}