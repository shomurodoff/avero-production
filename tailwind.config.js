/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      container: {
        center: true,
      },
      spacing: {
        15: "3.75rem",
      },
      borderRadius: {
        large: "25px",
        medium: "15px",
        default: "10px",
      },
      colors: {
        "primary-pink": "#F9EFF1",
        "primary-blue": "#043785",
        "primary-red": "#FF354D",
        "primary-gray": "#484F53",
        "secondary-gray": "#7c7c7c",
      },
    },
  },
  plugins: [],
};
// require("@tailwindcss/container-queries")
