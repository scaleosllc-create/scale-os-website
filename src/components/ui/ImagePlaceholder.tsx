interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  dark?: boolean;
  rounded?: "none" | "lg" | "full";
}

export default function ImagePlaceholder({
  label,
  sublabel,
  className = "",
  dark = false,
  rounded = "lg",
}: ImagePlaceholderProps) {
  const roundedClass = {
    none: "",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded];

  return (
    <div
      className={`flex items-center justify-center border animate-pulse ${
        dark
          ? "bg-gradient-to-br from-[#1a1a1a] to-[#1a1a1a]/60 border-[#333]/50"
          : "bg-gradient-to-br from-surface to-surface/60 border-border/50"
      } ${roundedClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="text-center">
        <div className={`mb-1 flex justify-center ${dark ? "text-[#555]" : "text-gray-400"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M14.5 9.5l5.5 5.5v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-1l4-4 3 3z" />
          </svg>
        </div>
        <div className={`text-xs font-semibold ${dark ? "text-[#555]" : "text-gray-400"}`}>
          {label}
        </div>
        {sublabel && (
          <div className={`text-[10px] mt-1 ${dark ? "text-[#444]" : "text-gray-300"}`}>
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
