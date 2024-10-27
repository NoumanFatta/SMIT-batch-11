import React, { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import { Navigate, Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Logincheker = () => {
  const { loginuser, loadinguser } = useContext(Authcontext);
  return loadinguser ? (
    <CircularProgress />
  ) : !loginuser ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
const Routeprotected = () => {
  const { loginuser, loadinguser } = useContext(Authcontext);
  return loadinguser ? (
    <CircularProgress />
  ) : loginuser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export { Logincheker, Routeprotected };
