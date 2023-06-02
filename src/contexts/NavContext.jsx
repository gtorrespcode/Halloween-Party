/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [backNav, setBackNav] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = ({target}) => {
      setModalOpen(!modalOpen);
      console.log(target.innerText);
  }
    

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 300) {
        setBackNav(true)
      } else {
        setBackNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  const changeNav = () => {
    if (window.innerWidth < 903) {
      setNavOpen(!navOpen);
    }
  };

  

  return (
    <NavContext.Provider value={{ navOpen, changeNav, backNav, openModal }}>
      {children}
    </NavContext.Provider>
  );
};
