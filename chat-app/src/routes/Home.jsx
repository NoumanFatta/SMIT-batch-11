import React, { useEffect, useRef, useState } from "react";
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
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  FieldValue,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../pages/confic";
import { Delete, MoreVert } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Home = () => {
  const { loginuser } = useSelector((state) => state.auth);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [editable, setEditable] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const editId = useRef();
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
                id: change.doc.id,
              },
            ]);
          } else if (change.type === "modified") {
            setMessages((prev) => {
              const allMessages = [...prev];
              const msgIndex = allMessages.findIndex(
                (m) => m.id === change.doc.id
              );
              allMessages[msgIndex] = {
                ...change.doc.data(),
                id: change.doc.id,
                user: usersRef.current[change.doc.data().sentBy],
              };
              return allMessages;
            });
          }
        });
      });
    })();
  }, []);
  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: message,
      sentBy: loginuser.uid,
      sentAt: serverTimestamp(),
      edited: false,
    });
    setMessage("");
  };
  const handleEditable = (index, id) => {
    if (editable?.[index]) {
      editId.current = null;
      setEditable(null);
      setMessage("");
      return;
    }
    editId.current = id;
    setEditable({ [index]: true });
    setMessage(messages[index].text);
  };
  const editMessage = async () => {
    const docRef = doc(db, "messages", editId.current);
    await updateDoc(docRef, {
      text: message,
      edited: true,
    });
    editId.current = null;
    setEditable(null);
    setMessage("");
  };
  const deleteForMe = async (id) => {
    const docRef = doc(db, "messages", id);
    await updateDoc(docRef, {
      deleteForMe: arrayUnion(loginuser.uid),
    });
  };
  const deleteForAll = async (id) => {
    const docRef = doc(db, "messages", id);
    await updateDoc(docRef, {
      deleteForAll: true,
      text: "",
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
              <React.Fragment key={data.id}>
                {data.sentBy !== loginuser.uid ? (
                  <>
                    {!data?.deleteForMe?.includes(loginuser.uid) && (
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
                            <Typography variant="body1">
                              {data.edited && (
                                <span
                                  style={{
                                    position: "absolute",
                                    height: "8px",
                                    width: "8px",
                                    borderRadius: "50%",
                                    top: "0px",
                                    left: "22px",
                                    background: "red",
                                  }}
                                ></span>
                              )}
                              {data?.deleteForAll
                                ? "This message has been deleted"
                                : data.text}
                            </Typography>
                          </Tooltip>
                          <Button onClick={() => deleteForMe(data.id)}>
                            <Delete />
                          </Button>
                        </Box>
                      </ListItem>
                    )}
                  </>
                ) : (
                  <>
                    {!data?.deleteForMe?.includes(loginuser.uid) && (
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
                            <Typography position="relative" variant="body1">
                              {data.edited && (
                                <span
                                  style={{
                                    position: "absolute",
                                    height: "8px",
                                    width: "8px",
                                    borderRadius: "50%",
                                    top: "-13px",
                                    left: "-16px",
                                    background: "red",
                                  }}
                                ></span>
                              )}
                              {data?.deleteForAll
                                ? "This message has been deleted"
                                : data.text}
                            </Typography>
                          </Tooltip>
                          {!data?.deleteForAll && (
                            <>
                              <Button
                                variant="contained"
                                id="demo-positioned-button"
                                aria-controls={
                                  open ? "demo-positioned-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={(event) => {
                                  setAnchorEl(event.currentTarget);
                                }}
                              >
                                <MoreVert />
                              </Button>

                              <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={() => {
                                  setAnchorEl(null);
                                }}
                                anchorOrigin={{
                                  vertical: "top",
                                  horizontal: "left",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "left",
                                }}
                              >
                                <MenuItem
                                  onClick={() => handleEditable(index, data.id)}
                                >
                                  {editable?.[index] ? "Cancel" : "Edit"}
                                </MenuItem>
                                <MenuItem onClick={() => deleteForMe(data.id)}>
                                  Delete for me
                                </MenuItem>
                                <MenuItem onClick={() => deleteForAll(data.id)}>
                                  Delete for All
                                </MenuItem>
                              </Menu>
                            </>
                          )}
                        </Box>
                      </ListItem>
                    )}
                  </>
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
          onClick={editable ? editMessage : sendMessage}
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
