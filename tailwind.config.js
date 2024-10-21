import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor: '#ffffff',
        textColor: '#000000',
        softBg: '#f0f0f0',
        softTextColor: '#626262',
        
        darkBgColor: '#0f172a',
        darkTextColor: '#ddd',
        darkSoftBg: '#1f273a',
        darkSoftTextColor: '#a6a6a6',
        
        style: "#57c4ff31",
        fashion: "#da85c731",
        food: "#7fb88133",
        travel: "#ff795736",
        culture: "#ffb04f45",
        coding: "#5e4fff31",
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
