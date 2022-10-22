/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#E3F6F5",
        accent: "#272343",
        "dark-primary": "#BAE8E8",
      },
      textColor: {
        accent: "#272343",
      },
    },
  },
  plugins: [require("daisyui")],
};
