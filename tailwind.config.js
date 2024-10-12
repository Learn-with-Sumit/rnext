module.exports = {
  content: ["./dist/*.html", "./dist/assets/**/*.js"],
  darkMode: "class",

  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
