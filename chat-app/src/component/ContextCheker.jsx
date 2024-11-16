import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Logincheker = () => {
  const { loginuser, loadinguser } = useSelector((state) => state.auth);
  return loadinguser ? (
    <CircularProgress />
  ) : !loginuser ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
const Routeprotected = () => {
  const { loginuser, loadinguser } = useSelector((state) => state.auth);
  return loadinguser ? (
    <CircularProgress />
  ) : loginuser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export { Logincheker, Routeprotected };
