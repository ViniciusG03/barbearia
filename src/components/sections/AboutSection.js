import { Check } from "lucide-react";

export default function AboutSection() {
  const differentials = [
    "Especialistas em cabelos cacheados e crespos",
    "Equipe com formação internacional",
    "Produtos naturais e de qualidade premium",
    "Ambiente exclusivo e confortável",
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/600/600"
              alt="Varanda dos Cachos - Ambiente"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Conheça Nossa História</h2>
            <p className="text-gray-700 mb-6">
              A Varanda dos Cachos nasceu da paixão de Carolina Mendes pela
              diversidade dos cabelos brasileiros. Com mais de 10 anos de
              experiência, Carolina fundou este espaço em 2020 com a missão de
              valorizar a beleza natural de cada pessoa, especialmente os
              cabelos cacheados, crespos e ondulados, com técnicas
              especializadas e produtos de alta qualidade.
            </p>
            <p className="text-gray-700 mb-6">
              Localizada no coração de Brasília, nossa barbearia e salão se
              tornaram referência para quem busca cuidados personalizados,
              atendimento atencioso e resultado impecável. Cada cliente é
              recebido como parte da nossa família, desfrutando de uma
              experiência única.
            </p>

            <h3 className="text-xl font-semibold mb-4">Nossos Diferenciais:</h3>
            <ul className="space-y-2 mb-8">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-amber-500 mr-2" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
