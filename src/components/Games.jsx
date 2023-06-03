import { useState } from "react";
import Movie from "./global/Movie";
import Line from "./global/Line";
import { gamesImg, gameNames } from "../data/games";

export default function Games() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeGame = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="games"
      className="text-primary  text-mobileP text-center font-secundary flex flex-col items-center justify-center mb-12 px-8 gap-y-12 md:gap-y-14 md:text-desktop"
    >
      <p>
        Para animar ainda mais a noite que tal alguns{" "}
        <Movie index={6} movie="Jogos Mortais" /> ?
      </p>
      <div className="flex flex-col items-center justify-center gap-x-8 sm:flex-row sm: gap-y-6">
        <div
          className={
            gamesImg[activeIndex] +
            " bg-no-repeat bg-cover bg-center w-[250px] h-[350px] rounded-[0.5rem] drop-shadow-[8px_8px_3px_rgba(0,0,0,0.25)]  transition-all duration-700 hover:animate-shake cursor-pointer  md:w-[350px] md:h-[450px]"
          }
        ></div>
        <div className="w-[290px] font-secundary text-[1.45rem] md:text-[2rem] text-center text-game/25 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:flex-col ">
          {gameNames.map((element, index) => {
            return (
              <h1
                key={index}
                id={index}
                onClick={() => changeGame(index)}
                className={
                  activeIndex === index
                    ? "text-game w-[7.125rem] md:w-[12rem] cursor-pointer"
                    : "cursor-pointer w-[7.125rem] md:w-[12rem] hover:text-game/50 "
                }
              >
                {element}
              </h1>
            );
          })}
        </div>
      </div>
      <p>
        Só cuidado com a bebida pra ninguém ter{" "}
        <Movie index={7} movie="Psicose" />.
      </p>
      <Line />
    </section>
  );
}
