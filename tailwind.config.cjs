/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': 'var(--main-gradient)',
      },
      colors: {
        'main-color': '#d56058',
        'main-color-darker': '#b83930',
      },
      spacing: {
        'smallest': '1.375rem',
        'small': '1.875rem',
      },
    },
  },
  plugins: [],
}
