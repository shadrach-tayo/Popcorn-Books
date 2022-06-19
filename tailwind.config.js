module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        1: '2px',
        840: "840px",
      },
      gridTemplateColumns: {
        layout: "1fr 3fr",
        "layout-sm": "1fr",
      },
      gridTemplateRows: {
        "layout-sm": "auto",
      },
      maxWidth: {
        840: "840px",
      },
      colors: {
        dark: "#1F2128",
        white: "#FFFFFF",
        "cornflower": "#7B61FF",
        mercury: "#E5E5E5",
        "sand": "#F4F4F4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
