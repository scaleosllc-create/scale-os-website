interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  dark?: boolean;
  rounded?: "none" | "2xl" | "3xl" | "full";
}

export default function ImagePlaceholder({
  label,
  sublabel,
  className = "",
  dark = false,
  rounded = "2xl",
}: ImagePlaceholderProps) {
  const roundedClass = {
    none: "",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  }[rounded];

  return (
    <div
      className={`flex items-center justify-center ${
        dark
          ? "bg-white/[0.04]"
          : "bg-surface-low"
      } ${roundedClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="text-center">
        <svg className={`w-8 h-8 mx-auto mb-2 ${dark ? "text-white/15" : "text-on-surface/10"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
        <div className={`text-[10px] font-medium tracking-wide ${dark ? "text-white/20" : "text-on-surface/15"}`}>
          {label}
        </div>
        {sublabel && (
          <div className={`text-[9px] mt-1 ${dark ? "text-white/10" : "text-on-surface/8"}`}>
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
