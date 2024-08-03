/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom' : ["ClashGrotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
