/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1440px) { ... }
      'xl' : '1280px',

      // => @media (min-width: 1280px) { ... }
      '2xl' : '1536px'
      // => @media (min-width: 1536px) { ... }

    },
  },
  plugins: [],
};
