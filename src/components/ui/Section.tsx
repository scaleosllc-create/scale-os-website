interface SectionProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "cream";
  className?: string;
  id?: string;
  narrow?: boolean;
}

const variantStyles = {
  light: "bg-white",
  dark: "bg-ink text-white noise-overlay",
  cream: "bg-off-white",
};

export default function Section({
  children,
  variant = "light",
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
