/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				'gray-2': '#b2becd',
				'gray-4': '#454e56',
				'gray-5': '#2a2e35'
			}
		},
		keyframes: {
			scale: {
				'0%': { transform: 'translateY(-100%) scaleY(0)' },
				'100%': { transform: 'translateY(0) scaleY(1)' }
			},
			pulse: {
				'0%': { transform: 'scale(1)' },
				'50%': { transform: 'scale(1.1)' },
				'100%': { transform: 'scale(1)' }
			}
		},
		animation: {
			scale: 'scale 0.8s ease-out',
			pulse: 'pulse 2s ease-in-out infinite'
		}
	},
	plugins: []
};
