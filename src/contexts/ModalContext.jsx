/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState({
    title: "",
    description: "",
  });

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ modal, openModal, closeModal, content, setContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};
