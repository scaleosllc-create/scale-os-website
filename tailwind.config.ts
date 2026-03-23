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
        ink: "#111111",
        forest: "#2D6A4F",
        "forest-light": "#E8F0EC",
        "off-white": "#FAFAF8",
        surface: "#F0F0EC",
        border: "#E0E0E0",
        "dark-body": "#AAAAAA",
        "dark-muted": "#666666",
        error: "#DC2626",
        gray: {
          300: "#BBBBBB",
          400: "#999999",
          500: "#777777",
          700: "#555555",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      fontSize: {
        eyebrow: ["11px", { letterSpacing: "2px", fontWeight: "600" }],
        small: "12px",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(45, 106, 79, 0.08), 0 4px 12px rgba(45, 106, 79, 0.04)",
        "card-hover": "0 4px 16px rgba(45, 106, 79, 0.12), 0 8px 32px rgba(45, 106, 79, 0.06)",
        "btn": "0 1px 2px rgba(17, 17, 17, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
