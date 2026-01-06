import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: "#232323",
        secondary: "#000000",
        tertiary: "#000000",
        background: "#000000",
        text: "#ffffff",
      },
      fontFamily: {
        maharlika: ["Maharlika Regular", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "4px",
        1: "8px",
        1.5: "12px",
        2: "16px",
        2.5: "20px",
        3: "24px",
        3.5: "28px",
        4: "32px",
        5: "36px",
        6: "40px",
        7: "48px",
        8: "56px",
        9: "64px",
        10: "72px",
        11: "80px",
        12: "96px",
        14: "128px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;
