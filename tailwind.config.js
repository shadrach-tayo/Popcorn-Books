module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "dark-inset":
          "inset 0px 0px 16px rgba(255,255,255,0.05), inset 0px 2px 2px rgba(255,255,255,0.15)",
        card: "0 5px 15px -5px rgba(0,0,0,.08)",
      },
      spacing: {
        1: "2px",
        100: "100px",
        140: "140px",
        250: "250px",
        840: "840px",
      },
      gridTemplateColumns: {
        layout: "1fr 3fr",
        "layout-sm": "1fr",
        books: "140px 1fr",
        "books-sm": "100px 1fr",
      },
      gridTemplateRows: {
        "layout-sm": "auto",
      },
      maxWidth: {
        140: "140px",
        840: "840px",
      },
      colors: {
        dark: "#1F2128",
        white: "#FFFFFF",
        cornflower: "#7B61FF",
        mercury: "#E5E5E5",
        sand: "#F4F4F4",
        crimson: "#EF233C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
