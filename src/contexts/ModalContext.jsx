/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [movieModal, setMovieModal] = useState(false);
  const [gameModal, setGameModal] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);
  const [developersModal, setDevelopersModal] = useState(false);
  const [content, setContent] = useState({
    title: "",
    description: "",
  });

  return (
    <ModalContext.Provider
      value={{
        movieModal,
        setMovieModal,
        gameModal,
        setGameModal,
        inviteModal,
        setInviteModal,
        developersModal,
        setDevelopersModal,
        content,
        setContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};


