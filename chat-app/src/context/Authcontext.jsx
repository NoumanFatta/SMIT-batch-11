import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../pages/confic";

const initstate = {
  loginuser: null,
  loadinguser: true,
};

export const Authcontext = createContext(initstate);
const Authprovider = ({ children }) => {
  const [loginuser, setlogiuser] = useState(null);
  const [loadinguser, setloadinuser] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setloadinuser(false);
      if (user) {
        const uid = user.uid;
        setlogiuser(user);
      } else {
        setlogiuser(null);
      }
    });
  }, []);
  return (
    <>
      <Authcontext.Provider value={{ loginuser, loadinguser }}>
        {children}
      </Authcontext.Provider>
    </>
  );
};
export default Authprovider;
