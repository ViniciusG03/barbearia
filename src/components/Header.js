import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";

export default function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-black text-white shadow-lg py-2"
          : "bg-transparent text-white py-4"
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight flex items-center">
          <Scissors className="mr-2" size={24} />
          <span>VARANDA DOS CACHOS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="hover:text-amber-400 transition-colors">
            Sobre
          </a>
          <a
            href="#servicos"
            className="hover:text-amber-400 transition-colors">
            Serviços
          </a>
          <a href="#galeria" className="hover:text-amber-400 transition-colors">
            Galeria
          </a>
          <a
            href="#depoimentos"
            className="hover:text-amber-400 transition-colors">
            Depoimentos
          </a>
          <a
            href="#localizacao"
            className="hover:text-amber-400 transition-colors">
            Localização
          </a>
          <a href="#contato" className="hover:text-amber-400 transition-colors">
            Contato
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#sobre"
              className="hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Sobre
            </a>
            <a
              href="#servicos"
              className="hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Serviços
            </a>
            <a
              href="#galeria"
              className="hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Galeria
            </a>
            <a
              href="#depoimentos"
              className="hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Depoimentos
            </a>
            <a
              href="#localizacao"
              className="hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Localização
            </a>
            <a
              href="#contato"
              className="hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
