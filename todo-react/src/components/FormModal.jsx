import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Box, TextField } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { AuthContext } from "../context/AuthContext";

const emails = ["username@gmail.com", "user02@gmail.com"];

const FormModal = (props) => {
  const { open, onClose, setTodos } = props;
  const { loggedinUser } = React.useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(loggedinUser.uid);
      const formData = new FormData(e.currentTarget);
      const text = formData.get("text");
      const docRef = await addDoc(collection(db, "todos"), {
        text,
        createdBy: loggedinUser.uid,
        createdAt: serverTimestamp(),
      });
      setTodos((prev) => [{ text }, ...prev]);
      onClose()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog onClose={onClose} fullWidth open={open}>
      <DialogTitle>Add Todo</DialogTitle>
      <Box marginTop={5}>
        <form onSubmit={submitHandler}>
          <TextField name="text" />
          <Button type="submit"> Create todo </Button>
        </form>
      </Box>
    </Dialog>
  );
};

export default FormModal;
