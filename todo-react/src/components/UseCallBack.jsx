import { Button } from "@mui/material";
import React, { useEffect } from "react";

const UseCallBack = ({ handleSubmit }) => {
  useEffect(() => {
    document.addEventListener("mousemove", handleSubmit);
  }, []);
  return <div>UseCallBack</div>;
};

export default UseCallBack;
