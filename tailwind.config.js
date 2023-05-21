/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Creepster",
      secundary: "Bubblegum Sans"
    },
    extend: {
      colors:{
        primary: "#FFAC00",
        info: "#08A3F7",
        background: "#050C14",
      },
      backgroundImage: {
        home: "url(./public/Images/Home.png)",
      },
    },
  },
  plugins: [],
}

