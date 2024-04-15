/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        base: '#FFFAF0',
        orange: {
          light: '#FDD03B',
          dark: '#CB7F07',
        },
        green: '#4A9396',
        black: '#00202E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
