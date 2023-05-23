import { useState } from "react";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const changeNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className={
        navOpen
          ? "bg-background/30 absolute top-0 left-0 h-full w-full flex flex-col z-10 pt-2 px-3"
          : "bg-background/30 fixed w-full h-[53px] flex justify-center border-b-[1px] border-black z-10 pt-2 px-3"
      }
    >
      <div
        className={
          "w-[35px] h-[35px] " +
          (navOpen
            ? "bg-[url(/Images/Nav_Ghost_Open.png)] self-center delay-100 ease-in-out duration-500 animate-pulse"
            : "bg-[url(/Images/Nav_Ghost.png)]") +
          " bg-no-repeat bg-cover bg-center cursor-pointer md:hidden delay-100 ease-in-out duration-500"
        }
        onClick={changeNav}
      ></div>
      <div
        className={
          navOpen
            ? "bg-background/80 backdrop-blur-[5px] basis-[90%] flex flex-col justify-center items-center font-primary text-xl text-primary decoration-1 underline gap-y-4 z-10"
            : "hidden "
        }
      >
        <a href="*">O Chamado</a>
        <a href="*">Atividade Paranormal</a>
        <a href="*">Jogos Mortais</a>
        <a href="*">O Poço</a>
        <a href="*">Halloween</a>
      </div>
    </nav>
  );
}
