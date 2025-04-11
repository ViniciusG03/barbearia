import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <h3
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center text-lg font-medium p-4 bg-white rounded-lg shadow cursor-pointer">
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </h3>

      {isOpen && (
        <div className="p-4 bg-white rounded-b-lg">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}
