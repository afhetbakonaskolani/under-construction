/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      animation: {
        'ping-slow': 'ping 1s cubic-bezier(0, 0, 0.2, 0.4) infinite ',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primary: '#2E3440',
        dark: '#292E39',
        semilight: '#3B4252',
        light: '#ECEFF4',
        lightToDark: '#D8DEE9',
        blue: '#88C0D0',
      },
    },
  },
  plugins: [],
};
