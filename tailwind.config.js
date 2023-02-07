/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#__next",
  theme: {
    extend: {},
  },
  tailwindConfig: "./styles/tailwind.config.js",
  plugins: [],
};
