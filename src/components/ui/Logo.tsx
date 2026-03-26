interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function LogoMark({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Two offset rectangles forming an abstract "S" / scale motif */}
      <rect x="4" y="4" width="16" height="16" rx="3" fill="#0058bc" />
      <rect x="12" y="12" width="16" height="16" rx="3" fill="white" />
    </svg>
  );
}

export default function Logo({ className = "", size = 24, showText = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {showText && (
        <span className="font-display font-bold text-white tracking-wider text-sm">
          SCALE OS
        </span>
      )}
    </span>
  );
}
