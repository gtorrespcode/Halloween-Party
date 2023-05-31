/* eslint-disable react/prop-types */

import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import Line from "./global/Line";

export default function Call() {
  const { changeNav } = useContext(NavContext);
  return (
    <section
      id="call"
      className="text-mobileP w-full font-secundary text-primary text-center flex flex-col justify-center items-center px-8 pb-6 gap-y-12
        md:text-desktop md:h-screen md:pb-0"
    >
      <p className="md:w-[64%]">
      Venham todos, mortais corajosos, <span className="text-info">O Chamado</span> para a noite mais aterrorizante do ano! Em meio à escuridão sombria, nas profundezas, nasce um convite irrecusável para a nossa festa. Adentrem e se preparem para experimentar o medo em sua forma mais pura. Nesta celebração misteriosa, as almas assombradas se reúnem para comemorar o <span className="text-info">Halloween</span> com uma intensidade que ecoará pelos séculos. No cenário sinistro e enfeitiçado, onde as sombras dançam e as criaturas sombrias sussurram, vocês testemunharão o terror em sua magnitude suprema.
      </p>

      <img
        src="/Images/ghost.png"
        className="w-[16.125rem] h-[16.25rem]
                   sm:w-[22.188rem] sm:h-[22.313rem]
                   md:w-[27.625rem] md:h-[27.625rem]"
      />
      <p className="md:hidden">
        Vamos fazer um tour para conhecer as principais novidades da nossa
        festa. Você pode clicar no nosso{" "}
        <span
          className="text-white duration-500 animate-pulse"
          onClick={changeNav}
        >
          fantasminha
        </span>{" "}
        ou seguir deslizando para baixo.
      </p>
      <Line />
    </section>
  );
}
