/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/*.html'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1.25rem",
			},
			colors: {
				primary: '#B4D429',
				dark: "#171923",
				light: "#fff",
				body: "#1D1E28"
			},
		},
	},
	plugins: [],
};
