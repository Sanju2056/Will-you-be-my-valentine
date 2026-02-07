/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cursive: ['"Dancing Script"', "cursive"],
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        // 'xl': '1280px',
        "2xl": "1536px",
      },
      colors: {
        primary: "#231149",
        secondary: "#713DDC",
        black: {
          solid: "#000000",
          light: "#2e2e2e",
        },
        white: {
          solid: "#ffffff",
          light: "#f4f4f4",
          700: "#F7F7F7",
        },
        grays: {
          gray: {
            1: "#8E8E93",
            2: "#AEAEB2",
            3: "#C7C7CC",
            5: "#E5E5EA",
          },
        },
      },
    },
    backgroundImage: {
      "custom-gradient":
        "linear-gradient(360deg, rgba(35, 17, 73, 0.91) 10%, rgba(84, 41, 175, 0.88) 100%)",
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",

          "@screen sm": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            paddingLeft: "4rem",
            paddingRight: "4rem",
          },
          "@screen lg": {
            paddingLeft: "4rem",
            paddingRight: "4rem",
            maxWidth: "1024px",
          },
          "@screen xl": {
            paddingLeft: "6rem",
            paddingRight: "6rem",
            maxWidth: "1440px",
          },
          "@screen 2xl": {
            maxWidth: "100%",
          },
        },
      });
    },
  ],
};
