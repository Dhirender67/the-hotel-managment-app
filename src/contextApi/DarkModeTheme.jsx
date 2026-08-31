import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeThemeContext = createContext(undefined);

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    },
    [isDarkMode],
  );

  function handleDarkModeToggle() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeThemeContext.Provider
      value={{
        isDarkMode,
        handleDarkModeToggle,
      }}
    >
      {children}
    </DarkModeThemeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeThemeContext);

  if (context === undefined) {
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  }

  return context;
}

export { DarkModeProvider, useDarkMode };
