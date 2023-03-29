/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'small': '440px',
      // => @media (min-width: 640px) { ... }

      'medium': '824px',
      // => @media (min-width: 1024px) { ... }

      'large': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

