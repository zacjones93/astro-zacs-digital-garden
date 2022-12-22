/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      'background': '#e9f0ea',
      'card-background': '#CCF2D4',
      'primary': '#27D6B8',
      'color-text': '#0c2e13',
      'color-subtext': '#777d78',
      'color-background': '#edf2ee'
    },
		extend: {},
	},
	plugins: [],
}