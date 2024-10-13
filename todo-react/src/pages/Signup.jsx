import React, { useContext, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";

const SignupForm = () => {
  const loggedinUser = useContext(AuthContext);
  console.log(loggedinUser);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await setDoc(doc(db, "users", userCredential.user.uid), formData);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 2,
        border: "1px solid",
        borderRadius: "8px",
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" align="center" mb={2}>
        Signup
      </Typography>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        name="password"
        label="Password"
        variant="outlined"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
        margin="normal"
      />
      <Button
        disabled={isLoading}
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
      >
        Signup
      </Button>
    </Box>
  );
};

export default SignupForm;
