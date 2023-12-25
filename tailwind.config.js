/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#D80032',
        secondary: '#2B2A4C',
        accent: '#F78CA2',
        pinky: '#FED9ED',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
