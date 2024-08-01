/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#1D5EC0', 
        'background-color': '#E3EEFF',
        'gray-description': '#5E5E5E',
        'gray-primary': '#373737',
        'bege-primary': '#FFD45C',
      }
    },
  },
  plugins: [],
}

