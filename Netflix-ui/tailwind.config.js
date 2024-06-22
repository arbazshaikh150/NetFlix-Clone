/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        'clr' : 'rgba(109, 109, 110, 0.7)',
      },
    },

  },
  plugins: [],
}

