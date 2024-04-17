/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      maxWidth: "1919px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
