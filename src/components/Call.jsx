/* eslint-disable react/prop-types */

import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import dataCall from "../data/dataCall";

export default function Call() {
  const { changeNav } = useContext(NavContext);
  return (
    <section
      id="call"
      className="text-mbileP w-full font-secundary text-primary text-center flex flex-col justify-center items-center px-8 py-4 gap-y-12
        md:text-desktop md:h-screen md:pb-0"
    >
      <p className="md:w-[64%]">
        {dataCall.part1} <span className="text-info">{dataCall.span1}</span>
        {dataCall.part2} <span className="text-info">{dataCall.span2}</span>
        {dataCall.part3}
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
    </section>
  );
}
