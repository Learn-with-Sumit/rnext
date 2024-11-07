/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.html", "./dist/**/*.html"],
	theme: {
		extend: {
			colors: {
				primary: '#28194b',
				// primary: '#7D49F8',
			}
		}
	},
	plugins: [require('@tailwindcss/aspect-ratio'),],
};
