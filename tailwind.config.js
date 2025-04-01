/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx,astro}'], // Ensure all relevant file types are included
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				gold: {
					500: '#D4AF37', // Gold color
				},
			},
		},
		animation: {
			'fade-in': 'fade-in 0.5s ease-in-out',
			'fade-out': 'fade-out 0.5s ease-in-out',
		},
		keyframes: {
			'fade-in': {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			},
			'fade-out': {
				'0%': { opacity: '1' },
				'100%': { opacity: '0' },
			},
		},
	},
	plugins: [],
}
