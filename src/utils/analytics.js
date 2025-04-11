export const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Substituir pelo ID real

// Inicialização do Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && !window.GA_INITIALIZED) {
    window.GA_INITIALIZED = true;
    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID);
  }
};

// Rastreamento de página
export const pageview = (url) => {
  if (typeof window !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Rastreamento de evento
export const event = ({ action, category, label, value }) => {
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
