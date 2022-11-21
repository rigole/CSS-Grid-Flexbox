const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily : {
        'comf': ['Comfortaa', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'nun': ['Nunito', 'sans-serif'],
        'libre': ['Libre Baskerville', 'sans-serif'],
        'monte': ['Montserrat', 'sans-serif'],
      sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      }
      
    },
  },
  plugins: [],
}
