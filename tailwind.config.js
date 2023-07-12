/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '450px'
      },
      colors: {
        'veryDarkBlue': 'hsl(235, 21%, 11%)',
        'ddesaturatedBlue': 'hsl(235, 24%, 19%)',
        'dgrayishBlue': 'hsl(234, 11%, 52%)',
        'lgrayishBlue': 'hsl(234, 39%, 85%)',
        'vlgrayishBlue': 'hsl(236, 33%, 92%)',
        'vdgrayishBlueLight': 'hsl(235, 19%, 35%)',
        'firstGradientColor': 'hsl(192, 100%, 67%)',
        'secondGradientColor': 'hsl(280, 87%, 65%)',
      }
    },
  },
  plugins: [],
}