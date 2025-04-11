export function sendWhatsAppMessage(formData) {
  // Formatar a mensagem para o WhatsApp
  const message = `Olá! Meu nome é ${formData.nome}. Gostaria de agendar um ${formData.servico} para ${formData.data}. ${formData.mensagem}`;

  // Número da barbearia - substitua pelo número real
  const phone = "5561999999999";

  // Codificar a mensagem para URL
  const encodedMessage = encodeURIComponent(message);

  // Abrir WhatsApp com a mensagem pré-preenchida
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
}
