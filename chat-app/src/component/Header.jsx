import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Authcontext } from "../context/Authcontext";
import { signOut } from "firebase/auth";
import { auth } from "../pages/confic";

const Header = () => {
  const { loginuser } = useContext(Authcontext);
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#666666",
        boxShadow: "10px 0px 0px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          My Website
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button variant="contained" onClick={async() => {
            await signOut(auth)
          }} >Logout</Button>
          {!loginuser && (
            <>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
