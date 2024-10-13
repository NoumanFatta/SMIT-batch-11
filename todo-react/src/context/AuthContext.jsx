import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase-config";

const initialState = {
  loggedinUser: null,
  userLoading: true,
};
export const AuthContext = createContext(initialState);
const AuthProvider = ({ children }) => {
  const [loggedinUser, setLoggedinUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLoading(false);
      if (user) {
        const uid = user.uid;
        setLoggedinUser(user);
      } else {
        setLoggedinUser(null);
      }
    });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ loggedinUser, userLoading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthProvider;
