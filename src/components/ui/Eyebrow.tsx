interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-block rounded-full bg-forest/[0.08] px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-forest mb-5 ${className}`}
    >
      {children}
    </span>
  );
}
