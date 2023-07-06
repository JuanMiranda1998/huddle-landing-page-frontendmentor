/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/bg-desktop.svg')",
        'mobile': "url('/bg-mobile.svg')",
      },
      colors: {
        'violet': 'hsl(257, 40%, 49%)',
        'soft-magenta': 'hsl(300, 69%, 71%)'
      },
      fontFamily: {
        'body': ['Open Sans', 'sans-serif'],
        'headings': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}