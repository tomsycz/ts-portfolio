import React, { createContext, useState } from "react";

export const NaviContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});

const NaviProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <NaviContext.Provider value={{ hidden, toggleHidden }}>
      {children}
    </NaviContext.Provider>
  );
};

export default NaviProvider;
