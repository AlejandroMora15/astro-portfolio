/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'electric-violet': {
					'50': '#f4f3ff',
					'100': '#ebe9fe',
					'200': '#d9d6fe',
					'300': '#bdb4fe',
					'400': '#9c8afb',
					'500': '#7c5bf7',
					'600': '#6633ee',
					'700': '#5c27da',
					'800': '#4d20b7',
					'900': '#401c96',
					'950': '#260f66',
				},
			}
		},
	},
	plugins: [animations],
}
