/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': '#b1454a',
        'secondary-color': '#121212',
        'black-200': '#020202',
        'black-300': '333333',
        'black-400': '1f1e31',
        'black-500': '#555555',
        'gray-100': '#888888',
        'creamson': '#fff0de',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        '100': '100',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
      },
      fontStyle: {
        'italic': 'italic',
      },
    },
  },
  plugins: [],
}
