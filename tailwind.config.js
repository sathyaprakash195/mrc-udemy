/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "border",
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "rounded-full",
    "bg-color"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B2447",
      },
    },
  },
  plugins: [],
};
