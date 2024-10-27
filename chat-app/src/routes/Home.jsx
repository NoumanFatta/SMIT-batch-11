import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  AppBar,
  Toolbar,
  Avatar,
  TextField,
  IconButton,
  Tooltip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../pages/confic";
import { Authcontext } from "../context/Authcontext";

const Home = () => {
  const { loginuser } = useContext(Authcontext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const usersRef = useRef([]);
  useEffect(() => {
    (async () => {
      const userQuery = query(collection(db, "users"));
      const userSnapshot = await getDocs(userQuery);
      userSnapshot.forEach((doc) => {
        usersRef.current = {
          ...usersRef.current,
          [doc.id]: doc.data(),
        };
        // usersRef.current = [...usersRef.current, { ...doc.data(), id: doc.id }];
      });
      const q = query(collection(db, "messages"), orderBy("sentAt", "asc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            setMessages((prev) => [
              ...prev,
              {
                ...change.doc.data(),
                user: usersRef.current[change.doc.data().sentBy],
              },
            ]);
          }
        });
      });

      // const q = query(collection(db, "messages"), orderBy("sentAt", "asc"));
      // const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((doc) => {
      //   const singleMsg = doc.data();
      //   setMessages((prev) => [...prev, singleMsg]);
      //   // setMessages(allMessages);
      // });
    })();
  }, []);
  console.log(">>>", messages);
  const sendMessage = async () => {
    const docRef = await addDoc(collection(db, "messages"), {
      text: message,
      sentBy: loginuser.uid,
      sentAt: serverTimestamp(),
    });
  };
  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "auto",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
      }}
    >
      <AppBar
        position="static"
        sx={{ borderRadius: "8px 8px 0 0", bgcolor: "green" }}
      >
        <Toolbar>
          <Avatar sx={{ bgcolor: "white", marginRight: 2 }}>
            <ChatIcon color="primary" />
          </Avatar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Chatbot Assistant
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        elevation={3}
        sx={{
          flex: 1,
          padding: 2,
          overflowY: "auto",
          bgcolor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List sx={{ padding: 0 }}>
          {messages.map((data, index) => {
            return (
              <React.Fragment key={index}>
                {data.sentBy !== loginuser.uid ? (
                  <ListItem sx={{ justifyContent: "flex-start" }}>
                    <Box
                      sx={{
                        maxWidth: "75%",
                        bgcolor: "#e0e0e0",
                        color: "black",
                        borderRadius: "16px 16px 16px 0",
                        padding: "10px 15px",
                        boxShadow: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      <Tooltip
                        title={`${data.user.firstName} ${data.user.lastname}`}
                      >
                        <Typography variant="body1">{data.text}</Typography>
                      </Tooltip>
                    </Box>
                  </ListItem>
                ) : (
                  <ListItem sx={{ justifyContent: "flex-end" }}>
                    <Box
                      sx={{
                        maxWidth: "75%",
                        bgcolor: "green",
                        color: "white",
                        borderRadius: "16px 16px 0 16px",
                        padding: "10px 15px",
                        boxShadow: 1,
                        wordWrap: "break-word",
                      }}
                    >
                      <Tooltip title="You">
                        <Typography variant="body1">{data.text}</Typography>
                      </Tooltip>
                    </Box>
                  </ListItem>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Paper>

      <Box
        sx={{
          display: "flex",
          padding: 2,
          bgcolor: "white",
          borderTop: "1px solid #e0e0e0",
          borderRadius: "0 0 8px 8px",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <TextField
          variant="outlined"
          label="Type your message..."
          fullWidth
          sx={{
            marginRight: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton
          onClick={sendMessage}
          disabled={!message}
          color="primary"
          sx={{
            bgcolor: "green",
            color: "white",
            borderRadius: "50%",
            "&:hover": { bgcolor: "green" },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
