/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D466B',
        secondary: '#EC8108',
        spring: '#79ac7f',
        summer: '#61b5c9',
        fall: '#fb974b',
        winter: '#e2e8f0',
      },
    },
  },
  plugins: [],
};
