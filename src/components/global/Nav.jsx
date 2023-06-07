import { useContext } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-scroll";

import { NavContext } from "../../contexts/NavContext";

export default function Nav() {
  const { navOpen, changeNav, backNav } = useContext(NavContext);
  const anchor =
    "md:flex md:flex-row md:font-primary md:text-xl md:text-primary md:border-solid md:border-2 md:border-primary md:rounded-lg md:px-6 md:py-1 md:hover:bg-background md:delay-100 md:duration-200 md:cursor-pointer";

  return (
    <div>
      <nav
        className={
          navOpen
            ? "bg-background/80 fixed backdrop-blur-[5px] w-full h-full flex flex-col justify-center items-center font-primary text-xl text-primary decoration-1 underline gap-y-4 z-20"
            : "bg-background/30 fixed top-0 left-0 backdrop-blur-[5px] w-full h-[3.313rem] flex justify-center border-b-[1px] border-black pt-2 px-3 md:h-auto md:py-3 z-20"
        }
      >
        <div
          className={
            "w-[2.188rem] h-[2.188rem] absolute top-2 " +
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
          <Link
            className={anchor}
            onClick={changeNav}
            to="call"
            smooth={true}
            offset={-90}
            duration={600}
            delay={200}
          >
            O Chamado
          </Link>

          <Link
            className={anchor}
            onClick={changeNav}
            to="gallery"
            smooth={false}
            offset={-90}
            duration={600}
            delay={200}
          >
            Atividade Paranormal
          </Link>

          <Link
            className={anchor}
            onClick={changeNav}
            to="menu"
            smooth={true}
            offset={-90}
            duration={600}
            delay={200}
          >
            O Poço
          </Link>

          <Link
            className={anchor}
            onClick={changeNav}
            to="games"
            smooth={true}
            offset={-90}
            duration={600}
            delay={200}
          >
            Jogos Mortais
          </Link>

          <Link
            className={anchor}
            onClick={changeNav}
            to="invite"
            smooth={true}
            offset={-90}
            duration={600}
            delay={200}
          >
            Halloween
          </Link>

          <Link
            className={anchor}
            onClick={changeNav}
            to="developers"
            smooth={false}
            offset={-90}
            duration={600}
            delay={200}
          >
            Nós
          </Link>
        </div>
      </nav>

      <div
        className={`fixed bottom-6 transition-all duration-1000  ${
          backNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        } left-[88%] cursor-pointer z-10 text-primary text-[2rem]  md:left-[95%] md:text-[2.2rem] md:hover:scale-110`}
      >
        <Link
          activeClass="active"
          to="home"
          smooth={true}
          offset={-90}
          duration={700}
          delay={200}
        >
          <FiArrowUpCircle />
        </Link>
      </div>
    </div>
  );
}
