interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span className={`inline-block text-label-sm uppercase text-primary mb-5 ${className}`}>
      {children}
    </span>
  );
}
