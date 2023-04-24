/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
  theme: {
    colors: {
      'background': '#e9f0ea',
      'card-background': '#CCF2D4',
      'primary': '#27D6B8',
      'color-text': '#0c2e13',
      'color-subtext': '#777d78',
      'color-background': '#edf2ee',
      'background-dark': '#323433',
      'card-background-dark': '#5A5C5A',
      'primary-dark': '#C47474',
      'color-text-dark': '#EDF2EE',
    },
    fontFamily: {
      'title': ['"Exo 2"', 'serif'],
      'subtitle': ['"Medula One"', 'serif'],
      'body': ['Metrophobic', 'sans-serif']
    },
		extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
	},
	plugins: [
    require('@tailwindcss/typography')
  ],
}