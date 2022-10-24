/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F6B89E",
        accent: "#272343",
        "dark-primary": "#F88B69",
      },
      textColor: {
        accent: "#272343",
      },
      outlineColor: {
        accent: "#272343",
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
      placeholderColor: {
        accent: "#272343",
      },
    },
  },
  plugins: [require("daisyui")],
};
