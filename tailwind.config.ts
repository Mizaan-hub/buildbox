import type { Config } from "tailwindcss";
const Animation = require("tailwindcss-animate");
const Typography = require("@tailwindcss/typography");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        Nav: "#070F23",
        NavText: "#F69C9C",
        Background: "#0F1420",
        primary: {
          "1": "#FFE8F0",
          DEFAULT: "#EE2B69",
        },
        secondary: "#FBE843",
        black: {
          "1": "#333333",
          "2": "#141413",
          "3": "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          "1": "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        1: "2px 2px 0px 0px rgb(0, 0, 0)",
        2: "2px 2px 0px 2px rgb(0, 0, 0)",
        3: "2px 2px 0px 2px rgb(238, 43, 105)",
      },
    },
  },
  plugins: [Animation,Typography],
};

export default config;
