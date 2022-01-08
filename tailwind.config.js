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
      spacing: {
        0.5: "3px",
      },
      scale: {
        "-1": "-1",
      },
      flex: {
        2: "2",
      },
      fontSize: {
        max: "10rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
      },
      width: {
        "1px": "1px",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      minWidth: {
        "4xs": "4rem",
        "3xs": "8rem",
        "2xs": "12rem",
        "1xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        header: "var(--header)",
        accent: "var(--accent)",
        footer: "var(--footer)",
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
