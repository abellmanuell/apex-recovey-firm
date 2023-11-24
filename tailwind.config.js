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
        "tw-blue-600": "#efefef",
        "tw-blue-500": "#000",
        "tw-blue-400": "#3B3FB6",
        "tw-blue-300": "#1E90FF",
        "tw-sky-400": "#555581",
      },
    },
  },
  plugins: [],
};
