import { Config } from 'tailwindcss/types/config'

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1F6FB2',
				secondary: '#041634'
			},
			fontFamily: {
				heading: ['var(--font-audiowide)'],
				sans: ['var(--font-poppins)']
			}
		}
	},
	plugins: []
} satisfies Config

