import React from "react";
import logo from "../assets/logo.png";
import youtubeLogo from "../assets/youtube-logo.png";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-0">
      {/* === Seção superior do footer === */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* === Coluna 1 - Logo e frase === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo PITE" className="w-12 h-12" />
          </div>
          <p className="text-sm text-blue-100 max-w-[200px] leading-snug">
            <span className="font-semibold">Tecnologia inteligente</span> para o
            transporte escolar do futuro
          </p>
        </div>

        {/* === Coluna 2 - Links úteis === */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-4 text-white">Links Úteis</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Fale Conosco
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Suporte Técnico
              </a>
            </li>
          </ul>
        </div>

        {/* === Coluna 3 - Contato === */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-4 text-white">Contato</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li> (11) 0000-0000</li>
            <li> contato@pite.gov.br</li>
            <li> Seg-Sex: 8h às 17h</li>
          </ul>

          {/* Ícones sociais */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={youtubeLogo} alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={facebookLogo} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* === Coluna 4 - Fale Conosco === */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <h4 className="font-semibold text-lg mb-4 text-orange-400">
            Fale Conosco
          </h4>
          <p className="text-sm text-blue-100 max-w-[250px] leading-snug">
            Estamos à disposição para dúvidas, sugestões e parcerias.
          </p>
        </div>
      </div>

      {/* === Linha inferior === */}
      <div className="border-t border-blue-800 py-4 text-center text-sm text-blue-200">
        © 2025 PITE. Todos os direitos reservados.
      </div>
    </footer>
  );
}