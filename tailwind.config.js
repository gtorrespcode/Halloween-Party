/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Creepster",
      secundary: "Bubblegum Sans",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px)

      md: "903px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)
    },
    extend: {
      colors: {
        primary: "#FFAC00",
        info: "#08A3F7",
        background: "#050C14",
      },
      backgroundImage: {
        home: "url(/Images/Home.png)",
        savory: "url(/Images/hotdog.png)",
        candy: "url(/Images/candy.png)",
        drinks: "url(/Images/drink.png)",
      },
    },
  },
  plugins: [],
};
