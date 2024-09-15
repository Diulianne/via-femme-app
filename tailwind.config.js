/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'], // Fonte alternativa
      },
      colors: {
        'start-gradient': '#4A8EEF',
        'end-gradient': '#BD1197',
        'customGray': '#D0D0D0',
        'customGray2': '#E8E8E8',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

      },
    },
  },
  plugins: [],
};
