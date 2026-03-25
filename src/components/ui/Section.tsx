interface SectionProps {
  children: React.ReactNode;
  variant?: "background" | "surface-low" | "dark" | "primary" | "light";
  className?: string;
  id?: string;
  narrow?: boolean;
}

const variantStyles = {
  background: "bg-background",
  "surface-low": "bg-surface-low",
  dark: "bg-surface-card",
  primary: "gradient-hero text-white",
  light: "bg-white text-[#0a0a0a]",
};

export default function Section({
  children,
  variant = "background",
  className = "",
  id,
  narrow = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 ${variantStyles[variant]} ${className}`}>
      <div className={`mx-auto ${narrow ? "max-w-3xl" : "max-w-container"} px-6 md:px-8 lg:px-12`}>
        {children}
      </div>
    </section>
  );
}
