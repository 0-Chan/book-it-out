const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#__next',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-openSans)', ...fontFamily.sans],
      },
    },
  },
  tailwindConfig: './styles/tailwind.config.js',
  plugins: [],
};
