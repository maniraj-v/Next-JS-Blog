import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7b00d3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        in: ["var(--font-in)"],
        mr: ["var(--font-mr)"],
      },
    },
  },
  plugins: [],
};
export default config;
