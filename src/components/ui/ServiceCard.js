export default function ServiceCard({ name, price, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2 flex justify-between">
        <span>{name}</span>
        <span className="text-amber-500">{price}</span>
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#contato"
        className="inline-block text-amber-500 hover:text-amber-600 font-medium">
        Agendar →
      </a>
    </div>
  );
}
