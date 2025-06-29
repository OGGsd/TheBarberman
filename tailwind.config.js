/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#3B82F6',
          text: '#1F2937',
        }
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      aspectRatio: {
        '2/1': '2 / 1',
      }
    },
  },
  plugins: [],
};