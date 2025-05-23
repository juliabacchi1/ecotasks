const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          light: "#E3FCEC",
          DEFAULT: "#00A86B",
          dark: "#007A50",
        },
        accent: {
          orange: "#E58E26",
        },
        grayish: {
          light: "#F5F9F7",
          dark: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
