interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-white border border-border rounded-lg p-6 shadow-card ${
        hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
