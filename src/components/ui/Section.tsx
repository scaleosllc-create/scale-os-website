interface SectionProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "off-white";
  className?: string;
  id?: string;
}

const variantStyles = {
  light: "bg-white",
  dark: "bg-ink text-white",
  "off-white": "bg-off-white",
};

export default function Section({
  children,
  variant = "light",
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-8 md:py-12 ${variantStyles[variant]} ${className}`}>
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-0">
        {children}
      </div>
    </section>
  );
}
