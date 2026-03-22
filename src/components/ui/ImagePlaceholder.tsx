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
      className={`flex items-center justify-center border-2 border-dashed ${
        dark ? "bg-[#1a1a1a] border-[#333]" : "bg-surface border-[#ccc]"
      } ${roundedClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="text-center">
        <div className={`text-2xl mb-1 ${dark ? "text-[#555]" : "text-gray-400"}`}>
          &#128444;
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
