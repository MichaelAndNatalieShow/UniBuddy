/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalblue: '#4375AE',
        spacecadet: '#1B2845',
        squid: '#334978',
        azure: '#D1E3E7',
        cream: '#FFFEFC',
        febreeze: '#F9FBFC',
        marigold: '#F0B429',
        matcha: '#8EA491',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
