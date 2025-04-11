import { Instagram, Facebook, Twitter } from "lucide-react";

export default function SocialLinks({
  color = "text-gray-400",
  hoverColor = "text-amber-500",
}) {
  return (
    <div className="flex space-x-4">
      <a
        href="https://instagram.com/varandadoscachos"
        target="_blank"
        rel="noopener noreferrer"
        className={`${color} hover:${hoverColor}`}>
        <Instagram size={24} />
      </a>
      <a
        href="https://facebook.com/varandadoscachos"
        target="_blank"
        rel="noopener noreferrer"
        className={`${color} hover:${hoverColor}`}>
        <Facebook size={24} />
      </a>
      <a
        href="https://twitter.com/varandadoscachos"
        target="_blank"
        rel="noopener noreferrer"
        className={`${color} hover:${hoverColor}`}>
        <Twitter size={24} />
      </a>
    </div>
  );
}
