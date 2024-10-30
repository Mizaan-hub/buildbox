import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
					"100": "#333333",
					"200": "#141413",
					"300": "#7D8087",
					DEFAULT: "#000000",
				},
        Nav : "#070F23",
        NavText: "#F69C9C"
      },
    },
  },
  plugins: [],
};
export default config;
