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
        primary: "#0058bc",
        "primary-container": "#0070eb",
        "on-primary": "#ffffff",
        background: "#0a0a0a",
        "surface-low": "#111111",
        "surface-high": "#1a1a1a",
        "surface-card": "#141414",
        "on-surface": "#ffffff",
        "on-surface-variant": "#888888",
        "on-surface-muted": "#555555",
        "outline-variant": "rgba(255, 255, 255, 0.06)",
        error: "#ef4444",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["2rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-sm": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-md": ["0.75rem", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }],
      },
      boxShadow: {
        ambient: "0 20px 40px -5px rgba(0, 0, 0, 0.3)",
        "ambient-lg": "0 30px 60px -10px rgba(0, 0, 0, 0.4)",
        glass: "0 4px 16px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
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
