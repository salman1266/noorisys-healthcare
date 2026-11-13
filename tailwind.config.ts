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
        background: {
          DEFAULT: "#040810",
          secondary: "#07111F",
          elevated: "#0D1C2E",
          card: "#0D1C2E",
          glass: "rgba(13, 28, 46, 0.75)",
        },
        accent: {
          DEFAULT: "#12CDB5",
          luminous: "#00E5FF",
          secondary: "#43E6D0",
          hover: "#00E5FF",
          amber: "#D4A373",
          green: "#10B981",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          luminous: "rgba(0, 229, 255, 0.4)",
          teal: "rgba(18, 205, 181, 0.35)",
        },
      },
      fontFamily: {
        sora: ["var(--font-sora)", "'Sora'", "-apple-system", "sans-serif"],
        heading: ["var(--font-sora)", "'Sora'", "-apple-system", "sans-serif"],
        sans: ["var(--font-sora)", "'Sora'", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 229, 255, 0.3)",
        "glow-lg": "0 0 50px -5px rgba(0, 229, 255, 0.45)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.55)",
      },
    },
  },
  plugins: [],
};
export default config;
