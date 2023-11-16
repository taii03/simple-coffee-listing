/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-0': '#111315',
				'background-1': '#1B1D1F',
				'pastel-white': '#FEF7EE',
				'accent-0': '#F6C768',
				'accent-1': '#BEE3CC',
				muted: '#6F757C',
				danger: '#ED735D',
			},
		},
	},
	plugins: [],
};
