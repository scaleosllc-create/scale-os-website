interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  elevated?: boolean;
}

export default function Card({ children, className = "", hover = false, elevated = false }: CardProps) {
  return (
    <div className={`rounded-2xl ${elevated ? "bg-surface-high" : "bg-surface-card"} p-8 ${
      hover ? "hover-kinetic" : ""
    } ${className}`}>
      {children}
    </div>
  );
}
