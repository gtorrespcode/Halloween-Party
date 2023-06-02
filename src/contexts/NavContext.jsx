import { useState, createContext } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const changeNav = () => {
    if (window.innerWidth < 903) {
      setNavOpen(!navOpen);
    }
  };

  const openModal = ({target}) => {
    setModalOpen(!modalOpen);    
    console.log(target.innerText);
  }

  return (
    <NavContext.Provider value={{ navOpen, changeNav, openModal }}>
      {children}
    </NavContext.Provider>
  );
};
