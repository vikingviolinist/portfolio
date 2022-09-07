/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'gray-2': '#b2becd',
        'gray-4': '#454e56',
        'gray-5': '#2a2e35',
      },
    },
    keyframes: {
      scale: {
        '0%': { transform: 'translateY(-100%) scaleY(0)' },
        '100%': { transform: 'translateY(0) scaleY(1)' },
      },
    },
    animation: {
      scale: 'scale 1s ease-in-out',
    },
  },
  plugins: [],
};
