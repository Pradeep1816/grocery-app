/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "lato",
      },
      colors: {
        "custom-purple": "#8E0F5D",
      },
    },
  },
  plugins: [],
};
