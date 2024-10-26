import { createContext, useEffect, useState } from "react";

export const DummyContext = createContext({
  name: "",
  setData: () => {},
});

const DummyProvider = ({ children }) => {
  const [name, setName] = useState("nouman");
  const [data, setData] = useState(null);
  return (
    <DummyContext.Provider value={{ name, setData, data }}>
      {children}
    </DummyContext.Provider>
  );
};
export default DummyProvider;
