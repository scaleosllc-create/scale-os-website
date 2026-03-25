interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export default function Card({ children, className = "", hover = false, dark = false }: CardProps) {
  if (dark) {
    return (
      <div className={`rounded-3xl bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.04] ${className}`}>
        <div className={`rounded-[calc(1.5rem-6px)] bg-ink p-8 text-white shadow-inner-glow ${
          hover ? "transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-card-hover" : ""
        }`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl bg-ink/[0.02] p-1.5 ring-1 ring-ink/[0.05] ${className}`}>
      <div className={`rounded-[calc(1.5rem-6px)] bg-white p-8 shadow-card ${
        hover ? "transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-card-hover" : ""
      }`}>
        {children}
      </div>
    </div>
  );
}
