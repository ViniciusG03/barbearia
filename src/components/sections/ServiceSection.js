import { useState } from "react";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("cabelos");

  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços para todos os tipos de cabelos
            e estilos. Nossos profissionais são especializados em cabelos
            cacheados, crespos, ondulados e lisos.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10 border-b border-gray-300">
          {Object.keys(services).map((category) => (
            <button
              key={category}
              className={`px-6 py-3 font-medium ${
                activeTab === category
                  ? "text-amber-500 border-b-2 border-amber-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(category)}>
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[activeTab].map((service, index) => (
            <ServiceCard
              key={index}
              name={service.nome}
              price={service.preco}
              description={service.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function getCategoryLabel(category) {
  const labels = {
    cabelos: "Cabelos",
    cachos: "Cachos",
    barba: "Barba",
    kids: "Kids",
    tratamentos: "Tratamentos",
  };
  return labels[category] || category;
}
