import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        forest: "#2D6A4F",
        "forest-light": "#E8F0EC",
        "off-white": "#FDFBF7",
        surface: "#F5F3EF",
        border: "#E8E4DF",
        "dark-body": "#A0A0A0",
        "dark-muted": "#606060",
        error: "#DC2626",
        gray: {
          300: "#C0B8B0",
          400: "#9A9490",
          500: "#706A64",
          700: "#4A4540",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      fontSize: {
        eyebrow: ["11px", { letterSpacing: "2px", fontWeight: "600" }],
        small: "12px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "card": "0 1px 2px rgba(45, 106, 79, 0.04), 0 4px 16px rgba(10, 10, 10, 0.03)",
        "card-hover": "0 8px 30px rgba(10, 10, 10, 0.08), 0 2px 8px rgba(45, 106, 79, 0.06)",
        "btn": "0 1px 3px rgba(10, 10, 10, 0.06)",
        "float": "0 20px 60px rgba(10, 10, 10, 0.1), 0 4px 16px rgba(10, 10, 10, 0.04)",
        "inner-glow": "inset 0 1px 1px rgba(255, 255, 255, 0.15)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
