/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"rgb(9, 9, 94)"
      },
      backgroundImage: {
        'custom-image': 'url(https://cdn-ru.bitrix24.ru/b9813221/landing/839/8395f133dad197038017e1c068d3bd5c/Fon_1_ekran_1x.jpg)'
        
      }
    },
  },
  plugins: [],
}