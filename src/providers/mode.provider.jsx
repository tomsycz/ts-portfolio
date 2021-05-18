import React, { createContext, useState } from "react";

function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}
function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

export const ModeContext = createContext({
  isDark: true,
  toggleMode: () => {},
});

// const initialState = JSON.parse(localStorage.getItem("isDark")) || false;

const ModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => getLocalStorage("isDark", true));

  const toggleMode = () => {
    setLocalStorage("isDark", !isDark);
    setIsDark(!isDark);
  };
  return (
    <ModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
