import Movie from "../global/Movie";
import Line from "../../components/global/Line";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";

export default function Invite() {
  const { setInviteModal } = useContext(ModalContext);
  return (
    <section
      id="invite"
      className=" text-mobileP text-primary font-secundary text-center flex flex-col justify-center items-center px-8 gap-y-12 md:gap-y-16 mb-12 md:text-desktop "
    >
      <p className="md:w-[31.25rem]">
        Se você se interessou por nossa festa venha fazer parte dela. Os ingressos podem estar acabando, <Movie index={8} movie="Corra" />
      </p>
      <img
        className="w-[12.313rem] h-[12.313rem] rounded-[25%] drop-shadow-[0px_15px_5px_rgba(0,0,0,0.25)] md:w-[22rem] md:h-[22rem]   md:hover:duration-1000 hover:duration-1000 transition-all"
        src="/Images/Terrifying_House.jpg"
      />
      <button
        onClick={() => setInviteModal(true)}
        className="bg-primary rounded-[10px] text-background mb-20 py-1 px-8 md:w-[15.313rem] md:py-4 md:hover:scale-[1.05] duration-700"
      >
        Adquirir ingresso
      </button>
      <Line />
    </section>
  );
}
