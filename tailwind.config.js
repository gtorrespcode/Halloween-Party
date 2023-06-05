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

      lg: "1150px",
      // => @media (min-width: 1024px)

      xl: "1440px",
      // => @media (min-width: 1280px)
    },
    extend: {
      colors: {
        primary: "#FFAC00",
        info: "#08A3F7",
        background: "#050C14",
        game: "#F70C08"
      },
      backgroundImage: {
        home: "url(/Images/Home.png)",
        savory: "url(/Images/hotdog.jpg)",
        candy: "url(/Images/candy.jpg)",
        drinks: "url(/Images/drink.jpg)",
        gImage0 : "url(/Images/gImage_0.jpg)",
        gImage1 : "url(/Images/gImage_1.jpg)",
        gImage2 : "url(/Images/gImage_2.jpeg)",
        gImage3 : "url(/Images/gImage_3.jpg)",
        gImage4 : "url(/Images/gImage_4.jpg)",
        gImage5 : "url(/Images/gImage_5.jpg)",
        game0 : "url(/Images/KingsCup.jpg)",
        game1:"url(/Images/Quarters.jpg)",
        game2:"url(/Images/Mime.jpg)",
        game3:"url(/Images/BeerPong.jpg)"
      },

      fontSize: {
        mobileP: ["1rem", "1.5rem"],
        desktop: ["1.5rem", "2rem"],
      },

      keyframes: {
        shake: {
          "0% , 100%" : {transform: "rotate(0deg)" },
          "25%, 75%" : {transform: "rotate(-3deg)"},
          "50%" : {transform: "rotate(3deg)"}  
        },
        openModal: {
          "0%": {transform: "scale(0.3)"},
          "100%": {transform: "scale(1)"}
        },

        showCard: {
          "0%": {transform: "translateY(200%)"},
          "100%": {transform: "translateY(0)"}
        }

      },

      animation: {
        shake: "shake 0.8s ease-in-out infinite",
        openModal: "openModal 1s ease",
        showCard: "showCard 1s ease"
        

      }
    },
  },
  plugins: [],
};
