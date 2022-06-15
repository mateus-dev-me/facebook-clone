/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
        "290px": "290px",
        "396px": "396px",
        "500px": "500px",
        "980px": "980px",
      },
      fontSize: {
        subtitle: "1.7rem",
      },
      colors: {
        "main-gray": "#F0F2F5",
        "main-blue": "#1877F2",
        "main-blue-hover": "#1B72A0",
        "main-green-hover": "#36A420",
      },
    },
  },
  plugins: [],
};
