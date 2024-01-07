/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/index.html", "./dist/add-task.html"],
	theme: {
		extend: {
			container: {
				center: true,
			},
			colors: {
				clifford: "#da373d",
			},
		},
	  },
	plugins: [],
};
