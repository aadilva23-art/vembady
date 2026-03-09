import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#e04440",
          600: "#d93832",
          700: "#b92e29",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        warm: {
          50: "#fdf8f3",
          100: "#faf0e4",
          200: "#f5e1c8",
          300: "#e8cba5",
          400: "#d4a574",
          500: "#c4884a",
          600: "#a86e35",
          700: "#8b572a",
          800: "#6d4422",
          900: "#4a2e17",
          950: "#2d1a0d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
