/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        inner: "inset 0px 5px 20px #000000",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    imageColor: ["responsive", "hover", "focus", "group-hover"],
  },
};
