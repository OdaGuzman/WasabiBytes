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
        'primary-color': 'var(--primary-color)',
        'color-white': 'var(--color-white)',
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
