import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070b14",
          900: "#0a0f1d",
          850: "#0f172a",
          800: "#172554",
          700: "#1e293b",
        },
        gasgold: {
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
        },
        flame: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#20bd5a",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "emergency-glow": "emergencyGlow 2s ease-in-out infinite",
        "beacon": "beaconPulse 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        emergencyGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(234, 88, 12, 0.5)" },
          "50%": { boxShadow: "0 0 25px rgba(234, 88, 12, 0.85)" },
        },
        beaconPulse: {
          "0%": { transform: "scale(0.95)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.6" },
          "100%": { transform: "scale(0.95)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
