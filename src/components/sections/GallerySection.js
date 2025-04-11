import { gallery } from "../../data/gallery";

export default function GallerySection() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nosso Espaço</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça o ambiente acolhedor da Varanda dos Cachos. Um espaço criado
            para proporcionar conforto e uma experiência única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
