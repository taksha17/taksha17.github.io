/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'kiss-bg': '#0a0a0a',     // Deepest black
				'kiss-surface': '#161616', // Card backgrounds
				'kiss-accent': '#ff2e51',  // That classic drama-site red/pink
				'kiss-text-muted': '#a0a0a0',
			},
			aspectRatio: {
				'poster': '2 / 3', // Standard movie poster ratio
			},
		},
	},
	plugins: [],
};