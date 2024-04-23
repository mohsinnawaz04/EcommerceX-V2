/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "Roboto", "Segoe UI", "sans-serif"],
        // Add other font families as needed
      },
    },
  },
  plugins: [],
};
