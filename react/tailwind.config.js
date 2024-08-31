/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ["ClashGrotesk", "sans-serif"],
      },
      colors: {
        darkGreen1: 'rgb(58, 82, 55)',
        darkGreen2: 'rgb(19, 40, 23)',
        lightGreen1: 'rgb(161, 169, 163)',
        lightGreen2: 'rgb(116, 127, 115)',
        lightGreen3: 'rgb(218, 218, 207)',
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
