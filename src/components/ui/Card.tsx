interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
  elevated?: boolean;
}

export default function Card({ children, className = "", hover = false, dark = false, elevated = false }: CardProps) {
  if (dark) {
    return (
      <div className={`rounded-2xl bg-on-surface p-8 text-white ${
        hover ? "hover-kinetic" : ""
      } ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`rounded-2xl ${elevated ? "bg-surface-card shadow-ambient" : "bg-surface-low"} p-8 ${
      hover ? "hover-kinetic" : ""
    } ${className}`}>
      {children}
    </div>
  );
}
