export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  ...props
}) {
  const baseClasses =
    "font-bold py-3 px-8 rounded-md transition-colors text-center";

  const variantClasses = {
    primary: "bg-amber-500 hover:bg-amber-600 text-black",
    secondary:
      "border-2 border-white hover:border-amber-400 hover:text-amber-400",
    outline:
      "border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
