const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", ...defaultTheme.fontFamily.sans]
      },
      screens: {
        lg: '1128px',
        lgp: '1161px',
        "li-tablet": '768px',
        "li-desktop": '960px',
        "2lg": '1161px',
        "3lg": '1200px'

      },
      colors: {
        /* LinkedIn colors */
        "li-gray-100": "#f3f2ef",
        "li-gray-800": "#1d2226",
        "li-black": "#000000",
        "li-blue-100": "#eef3f8"
      }
    }
  },
  plugins: [],
}
