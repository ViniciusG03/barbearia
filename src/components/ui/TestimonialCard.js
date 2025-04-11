import { Star } from "lucide-react";

export default function TestimonialCard({ name, text, rating }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="text-amber-500 fill-current" size={20} />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">"{text}"</p>
      <p className="font-medium">{name}</p>
    </div>
  );
}
