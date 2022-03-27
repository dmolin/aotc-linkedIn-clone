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
        lgp: '1161px'
      }
    }
  },
  plugins: [],
}
