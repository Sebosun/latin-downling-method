const colors = require("tailwindcss/colors");

module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    extend: {
      gridTemplateRows: {
        main: "1fr min-content",
      },
      colors: {
        orange: colors.orange,
        yellow: colors.amber,
        emerald: colors.emerald,
        lime: colors.lime,
        sky: colors.sky,
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        110: "32rem",
      },
    },
  },
  variants: {
    extend: {
      border: ["hover"],
    },
  },
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
