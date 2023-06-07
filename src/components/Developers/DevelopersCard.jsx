/* eslint-disable react/prop-types */

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { animations } from "../../data/animations"

export default function DevelopersCard(props) {
  const { setDevelopersModal, setContent } = useContext(ModalContext);

  return (
    <motion.div {...props.name === "Gabriel Torres" ? {...animations.leftToRightCard} : {...animations.rightToLeftCard}}
    className="bg-primary w-[9.063rem] h-[13.313rem] rounded-[10px] py-2 flex flex-col justify-around items-center border-2 border-primary duration-500 hover:scale-[1.05] hover:duration-500 hover:drop-shadow-[0px_20px_5px_rgba(0,0,0,0.50)] md:w-[17.813rem] md:h-[26.25rem]  ">
      <p className="text-background">{props.name}</p>
      <div className="bg-background w-full h-[70%]">
        <img
          onClick={() => {
            setContent({
              title: props.name,
              description: props.description,
              image: props.image,
            }),
              setDevelopersModal(true);
          }}
          src={props.image}
          className="w-full h-full cursor-pointer"
        />
      </div>

      <p className="text-background flex gap-x-2 py-2">
        <a target="blank" href={props.linkedin}>
          <AiFillLinkedin className=" text-[1.25rem] md:text-[2rem]" />
        </a>{" "}
        <a target="blank" href={props.github}>
          <AiFillGithub className="text-[1.25rem] md:text-[2rem]" />
        </a>
      </p>
      <p className="hidden">{props.description}</p>
    </motion.div>
  );
}
