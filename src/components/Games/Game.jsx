/* eslint-disable react/prop-types */
import { useContext } from "react";
import { gameRules } from "../../data/modals/gameRules";

import { ModalContext } from "../../contexts/ModalContext";

export default function Game({children, index}) {
  const { setGameModal, setContent } = useContext(ModalContext);

  return (
    <div
      className="text-info"
      onClick={() => {
        setContent({
          title: gameRules[index].title,
          description: gameRules[index].description,
        }),
          setGameModal(true);
      }}
    >
      {children}
    </div>
  );
}
