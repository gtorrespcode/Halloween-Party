import { useState } from "react";
import games from "../data/games";
import GameItem from "./GameItem";

export default function Games() {
  const [game, setGame] = useState();

  const changeGame = ({ target }) => {
    console.log(target);
  };

  return (
    <section className="text-primary text-mobileP font-secundary flex flex-col items-center justify-center gap-y-12 md:text-desktop">
      <p>Para animar ainda mais a noite que tal alguns <span className="text-info">Jogos Mortais</span> ?</p>
      <div className="flex flex-col items-center justify-center gap-x-36 sm:flex-row sm: gap-y-6">
        <div
          className={
            games[0] +
            " bg-no-repeat bg-cover bg-center w-[250px] h-[350px] rounded-[0.5rem] drop-shadow-[8px_8px_1px_rgba(0,0,0,0.25)]  md:w-[350px] md:h-[450px]"
          }
        ></div>
        <div className="flex items-center justify-center gap-x-12 gap-y-6 sm:flex-col">
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <GameItem onClick={changeGame} type="Pa Pin Pow" />
            <GameItem onClick={changeGame} type="Copo d'água" />
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <GameItem onClick={changeGame} type="Mímica" />
            <GameItem onClick={changeGame} type="Beer Pong" />
          </div>
        </div>
      </div>
      <p>Só cuidado com a bebida pra ninguém ter <span className="text-info">Psicose</span>.</p>
    </section>
  );
}
