/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
  './components/**/*.{html,js}','./pages/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    screens: {
      'sm': '640px',
     
      'md': '768px',
    
      'lg': '1024px',

      'xl': '1280px',
      
    },
    extend: {},
  },
  plugins: [],
}

