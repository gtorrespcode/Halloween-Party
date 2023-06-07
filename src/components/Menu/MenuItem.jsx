/* eslint-disable react/prop-types */
import { animations } from "../../data/animations"
import { motion } from "framer-motion";

export default function MenuItem(props) {
  

  return (
    <motion.div
    {...props.type === "Salgados" ? {...animations.leftToRight} : "" }
    {...props.type === "Bebidas e Drinks" ? {...animations.rightToLeft} : "" }
    {...props.type === "Doces" ? {...animations.downToUp} : "" }
    
      className={
        "w-[18.75rem] h-[15rem] " +
        props.bg +
        " bg-cover rounded-[0.625rem] md:w-[20.75rem] md:h-[21.75rem]"
      }
    >
      <div className="backdrop-blur-[2px] w-full h-full flex flex-col justify-center items-center">
        <p className="w-[11.875rem] text-2xl text-white bg-background/70 rounded-[0.625rem] mb-6 md:w-[17.1875rem] md:text-[2rem] md:py-2">
          {props.type}
        </p>
        <div className="w-[11.875rem] bg-background/70 text-base rounded-[0.625rem] py-2 md:w-[17.1875rem] md:text-2xl md:py-6">
          <ul>
            {props.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
