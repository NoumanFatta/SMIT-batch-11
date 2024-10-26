import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  useScrollTrigger,
} from "@mui/material";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import FormModal from "../components/FormModal";
import A from "./A";
import B from "./B";
import DummyProvider from "../context/DummyContext";
import TodoComp from "../components/TodoComp";
const Home = () => {
  const { loggedinUser } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [todosLoader, setTodosLoader] = useState(true);
  const signoutHandler = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const q = query(
          collection(db, "todos"),
          orderBy("createdAt", "desc"),
          where("createdBy", "==", loggedinUser.uid)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setTodos((prev) => [...prev, doc.data()]);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setTodosLoader(false);
      }
    })();
  }, []);
  return (
    <>
      <FormModal
        setTodos={setTodos}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Button variant="contained" onClick={signoutHandler}>
        Signout
      </Button>
      <Box marginTop={5}>
        {todosLoader ? (
          <CircularProgress />
        ) : (
          todos.map(({ text }, index) => (
            <React.Fragment key={index}>
              <p>{text}</p>
            </React.Fragment>
          ))
        )}
      </Box>
      <Box marginTop={5}>
        <Button onClick={() => setOpen(!open)}>Add Todo</Button>
      </Box>
      <DummyProvider>
        <A />
        <B />
      </DummyProvider>
      <TodoComp />

    </>
  );
};

export default Home;
