import { createContext, useContext, useState } from "react";

const initialState = {
  mode: "light",
};
export const ThemeContext = createContext(initialState);
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(initialState.mode);
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeProvider;
// export { ThemeContext };
