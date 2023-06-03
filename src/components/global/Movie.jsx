import { useContext } from "react";
import { movies } from "../../data/modals/movies";
import { ModalContext } from "../../contexts/ModalContext";

export default function Movie(props) {
  const { openModal, setContent } = useContext(ModalContext);

  return (
    <span
      className="text-info"
      onClick={() => {
        setContent({
          title: movies[props.index].title,
          description: movies[props.index].description,
        }),
          openModal();
      }}
    >
      {props.movie}
    </span>
  );
}
