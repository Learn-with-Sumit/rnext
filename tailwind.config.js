/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.html"],
	theme: {
		extend: {
			colors: {
				'color-bg': '#1A1A1A',
				'color-purple': '#FD088F',
				'color-gray': '#2E2E2E',
			},
			fontFamily: {
				'exo': ['"Exo 2"', 'sans-serif'],
				'play': ['"Play"', 'serif'],
			},
		}
	}

};
