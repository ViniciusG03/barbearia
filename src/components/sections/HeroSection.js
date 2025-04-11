import { Clock, MapPin, Phone } from "lucide-react";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gray-900 flex items-center">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Estilo Autêntico na Varanda dos Cachos
          </h1>
          <p className="text-xl mb-8">
            Especialistas em todos os tipos de cabelos e barbas. O seu espaço
            para cuidar do visual com profissionais experientes em um ambiente
            acolhedor no coração de Brasília.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contato" variant="primary">
              Agendar Horário
            </Button>
            <Button href="#servicos" variant="secondary">
              Ver Serviços
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoItem
              icon={<Clock className="mr-3 text-amber-400" size={24} />}
              title="Horário"
              text="Ter-Sáb: 9h às 20h"
            />
            <InfoItem
              icon={<MapPin className="mr-3 text-amber-400" size={24} />}
              title="Localização"
              text="Asa Sul, Brasília-DF"
            />
            <InfoItem
              icon={<Phone className="mr-3 text-amber-400" size={24} />}
              title="Contato"
              text="(61) 99999-9999"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, text }) {
  return (
    <div className="flex items-center">
      {icon}
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
