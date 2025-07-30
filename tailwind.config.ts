import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))'
      }
    },
  },
  plugins: [],
};

export default config;
