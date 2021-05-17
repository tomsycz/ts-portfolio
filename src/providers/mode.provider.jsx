import React, { createContext, useState } from "react";

export const ModeContext = createContext({
  isDark: true,
  toggleMode: () => {},
});

const ModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleMode = () => {
    setIsDark(!isDark);
  };
  return (
    <ModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
