/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.html", "./app/javascript/*.js"],
  theme: {
    extend: {
      colors: {
        brown: "#6F4E37",
        cream: "#F5E8D3",
        espresso: "#3B2F2F",
        caramel: "#D2A679",
        latte: "#C5A880",
      },
      fontFamily: {
        josefin: ["Josefin Sans"],
        playwrite: ["Playwrite AU SA"],
      },
    },
  },
  plugins: [],
};
