/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}",'./dist/assets/icons/*.svg'],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        lwsGreen: "#00D991",
        deepDark: "#17181C",
        mediumDark: "#1E1F24",
        lighterDark: "#27292F",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
