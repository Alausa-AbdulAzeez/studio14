/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#232C35",
        mainGray: "#4F4F4F",
        mainPurple: "#5C1A8D",
        mainYellow: "#F2C94C",
        darkYellow: "#DEB63D",
        lightBlue: "#A792FE12",
      },
    },
  },
  plugins: [],
};
