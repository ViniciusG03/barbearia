import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../../data/testimonials";
import Button from "../ui/Button";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho. Veja o que
            eles têm a dizer sobre a Varanda dos Cachos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((depoimento, index) => (
            <TestimonialCard
              key={index}
              name={depoimento.nome}
              text={depoimento.texto}
              rating={depoimento.avaliacao}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="https://g.page/review/varandadoscachos"
            variant="outline"
            external>
            Deixe sua Avaliação
          </Button>
        </div>
      </div>
    </section>
  );
}
