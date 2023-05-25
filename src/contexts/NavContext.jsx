import { useState, createContext } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  const changeNav = () => {
    if (window.innerWidth < 903) {
      setNavOpen(!navOpen);
    }
  };

  return (
    <NavContext.Provider value={{ navOpen, changeNav }}>
      {children}
    </NavContext.Provider>
  );
};
