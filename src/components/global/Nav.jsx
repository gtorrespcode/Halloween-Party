import { useState } from "react";
import { Link } from "react-scroll";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const anchor =
    "md:flex md:flex-row md:font-primary md:text-xl md:text-primary md:border-solid md:border-2 md:border-primary md:rounded-lg md:px-6 md:py-1 md:hover:bg-background md:delay-100 md:duration-200";
  const changeNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    // <nav
    //   className={
    //     navOpen
    //       ? "bg-background/30 absolute top-0 left-0 h-full w-full flex flex-col "
    //       : "bg-background/30 fixed w-full h-[53px] flex justify-center border-b-[1px] border-black pt-2 px-3"
    //   }
    // >
    //   <div
    //     className={
    //       "w-[35px] h-[35px] " +
    //       (navOpen
    //         ? "bg-[url(/Images/Nav_Ghost_Open.png)] self-center delay-100 ease-in-out duration-500 animate-pulse"
    //         : "bg-[url(/Images/Nav_Ghost.png)]") +
    //       " bg-no-repeat bg-cover bg-center cursor-pointer md:hidden delay-100 ease-in-out duration-500"
    //     }
    //     onClick={changeNav}
    //   ></div>
    //   <div
    //     className={
    //       navOpen
    //         ? "bg-background/80 backdrop-blur-[5px] p-0 basis-[90%] flex flex-col justify-center items-center font-primary text-xl text-primary decoration-1 underline gap-y-4 z-10"
    //         : "hidden "
    //     }
    //   >
    //     <a href="*">O Chamado</a>
    //     <a href="*">Atividade Paranormal</a>
    //     <a href="*">Jogos Mortais</a>
    //     <a href="*">O Poço</a>
    //     <a href="*">Halloween</a>
    //   </div>
    // </nav>
    <nav
      className={
        navOpen
          ? "bg-background/80 absolute top-0 left-0 backdrop-blur-[5px] w-full h-full flex flex-col justify-center items-center font-primary text-xl text-primary decoration-1 underline gap-y-4 z-20"
          : "bg-background/30 fixed top-0 left-0 backdrop-blur-[5px] w-full h-[53px] flex justify-center border-b-[1px] border-black pt-2 px-3 md:h-auto md:py-3"
      }
    >
      <div
        className={
          "w-[35px] h-[35px] absolute top-2 " +
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
            ? "flex flex-col justify-center items-center text-xl decoration-1 underline gap-y-4"
            : "hidden md:flex md:flex-row md:gap-x-8"
        }
      >
        <a className={anchor} href="*">
          O Chamado
        </a>
        <a className={anchor} href="*">
          Atividade Paranormal
        </a>
        <a className={anchor} href="*">
          Jogos Mortais
        </a>
        <a className={anchor} href="*">
          O Poço
        </a>
        <a className={anchor} href="*">
          Halloween
        </a>
      </div>
    </nav>
  );
}
