/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'checks-pattern': "url('/assets/checks.png')",
      },
    },
  },
  plugins: [],
};
