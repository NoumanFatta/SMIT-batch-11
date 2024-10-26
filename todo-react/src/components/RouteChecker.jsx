import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const LoginChecker = () => {
  const { loggedinUser, userLoading } = useContext(AuthContext);
  return userLoading ? (
    <CircularProgress />
  ) : !loggedinUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

const ProtectedRoutes = () => {
  const { loggedinUser, userLoading } = useContext(AuthContext);
  return userLoading ? (
    <CircularProgress />
  ) : loggedinUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export { LoginChecker, ProtectedRoutes };
