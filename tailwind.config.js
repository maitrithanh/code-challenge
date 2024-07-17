/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#72aa35",
        lightMain: "#f0f6ea",
      },
    },
  },
  plugins: [],
};
