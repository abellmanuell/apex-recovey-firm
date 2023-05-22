/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        outfit: ["outfit", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
      },

      colors: {
        "tw-blue-600": "#010F58",
        "tw-blue-500": "#1E1A56",
        "tw-blue-400": "#3B3FB6",
        "tw-blue-300": "#1E90FF",
        "tw-sky-400": "#555581",
      },
    },
  },
  plugins: [],
};
