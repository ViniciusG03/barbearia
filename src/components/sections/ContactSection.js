import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";
import { sendWhatsAppMessage } from "../../utils/whatsapp";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "Corte",
    data: "",
    mensagem: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsAppMessage(formData);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Agende seu Horário</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo para agendar seu horário. Entraremos em
            contato para confirmar sua reserva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />

          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

function ContactForm({ formData, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
          Nome Completo
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="telefone"
          className="block text-gray-700 font-medium mb-2">
          Telefone
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="servico"
          className="block text-gray-700 font-medium mb-2">
          Serviço Desejado
        </label>
        <select
          id="servico"
          name="servico"
          value={formData.servico}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required>
          <option value="Corte">Corte</option>
          <option value="Tratamento para Cachos">Tratamento para Cachos</option>
          <option value="Barba">Barba</option>
          <option value="Combo Corte + Barba">Combo Corte + Barba</option>
          <option value="Hidratação">Hidratação</option>
          <option value="Corte Infantil">Corte Infantil</option>
          <option value="Outro Serviço">Outro Serviço</option>
        </select>
      </div>

      <div>
        <label htmlFor="data" className="block text-gray-700 font-medium mb-2">
          Data e Horário Preferido
        </label>
        <input
          type="datetime-local"
          id="data"
          name="data"
          value={formData.data}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="mensagem"
          className="block text-gray-700 font-medium mb-2">
          Mensagem (Opcional)
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleInputChange}
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-md transition-colors">
        Enviar via WhatsApp
      </button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="text-amber-500 mr-4 mt-1" size={24} />
            <div>
              <h4 className="font-medium">Endereço</h4>
              <p className="text-gray-600">
                Quadra 205 Sul, Bloco B, Loja 15
                <br />
                Asa Sul, Brasília - DF
                <br />
                CEP: 70000-000
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="text-amber-500 mr-4 mt-1" size={24} />
            <div>
              <h4 className="font-medium">Telefone</h4>
              <p className="text-gray-600">(61) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="text-amber-500 mr-4 mt-1" size={24} />
            <div>
              <h4 className="font-medium">Horário de Funcionamento</h4>
              <p className="text-gray-600">
                Segunda: Fechado
                <br />
                Terça a Sexta: 9h às 20h
                <br />
                Sábado: 9h às 18h
                <br />
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-medium mb-4">Siga-nos nas Redes Sociais</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
