import GoogleMap from "../ui/GoogleMap";

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos localizados no coração de Brasília, com fácil acesso e
            estacionamento para nossos clientes.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg h-96">
          <GoogleMap />
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Endereço</h3>
          <p className="text-gray-600">
            Quadra 205 Sul, Bloco B, Loja 15
            <br />
            Asa Sul, Brasília - DF
            <br />
            CEP: 70000-000
          </p>
        </div>
      </div>
    </section>
  );
}
