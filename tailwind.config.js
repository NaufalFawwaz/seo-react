/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary1': '#1B9BA2',
        'primary2': '#004E52',
        'primary3': '#F7FBFC'
      },
    keyframes: {
        typing: {
          '0%, 10%, 100%': { width: '0%' },
          '70%, 90%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#1B9BA2' },
        },
      },
      animation: {
        typing: 'typing 7s steps(30, end) infinite, blink 1.5s infinite step-end',
      },
    },
  },
  plugins: [],
}

