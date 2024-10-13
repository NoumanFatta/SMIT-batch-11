import { useContext, useEffect } from "react";
import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";
const Home = () => {
  const data = { id: 1, userName: "test" };
  return (
    <>
      <div>Home</div>
    </>
  );
};

export default Home;
