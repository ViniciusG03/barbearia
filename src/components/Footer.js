import { Scissors } from "lucide-react";
import SocialLinks from "./ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Scissors className="mr-2" size={20} />
              VARANDA DOS CACHOS
            </h3>
            <p className="text-gray-400 mb-6">
              Experiência especializada em cabelos cacheados e crespos,
              valorizando a beleza natural de cada cliente.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-amber-500">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-400 hover:text-amber-500">
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="text-gray-400 hover:text-amber-500">
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-gray-400 hover:text-amber-500">
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#localizacao"
                  className="text-gray-400 hover:text-amber-500">
                  Localização
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-amber-500">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Segunda</span>
                <span className="text-amber-500">Fechado</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Terça-Sexta</span>
                <span className="text-amber-500">9h às 20h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sábado</span>
                <span className="text-amber-500">9h às 18h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Domingo</span>
                <span className="text-amber-500">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Varanda dos Cachos. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 text-sm">
            Desenvolvido por{" "}
            <a
              href="https://viniciusoliveira.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline">
              Vinicius Oliveira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
