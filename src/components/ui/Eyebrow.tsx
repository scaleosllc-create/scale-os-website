interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`text-eyebrow uppercase text-forest mb-3 ${className}`}>
      {children}
    </p>
  );
}
