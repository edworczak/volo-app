import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "#EF476F",
        yellow: "#FFD166",
        green: "#06D6A0",
        blue: "#118AB2",
        purple: "#331E36",
      },
      borderRadius: {
        DEFAULT: "50vh",
      },
    },
  },
  plugins: [],
};
export default config;