const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lexend", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      minWidth: {
        xxs: "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      fontFamily: ["hover", "focus"],
    },
  },
  options: {
    fontFace: true,
  },
  plugins: [],
};
