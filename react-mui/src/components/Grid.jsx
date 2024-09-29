import { Grid2, Paper, styled } from "@mui/material";
import React, { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const Grid = () => {
  // useEffect(() => {
  //   console.log("Component mounted");
  //   const interval = setInterval(() => {
  //     console.log("Interval running");
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //     console.log("Component unmounted");
  //   };
  // }, []);
  // useEffect(() => {
  //   const scroll = () => {
  //     console.log("Scrolling");
  //   };
  //   document.addEventListener("scroll", scroll);
  //   return () => {
  //     document.removeEventListener("scroll", scroll);
  //   };
  // }, []);
  return (
    <Grid2 columns={14} container spacing={2}>
      <Grid2 size={7}>
        <Item>size=8</Item>
      </Grid2>
      <Grid2 size={7}>
        <Item>size=4</Item>
      </Grid2>

      {/* <Grid2 size={4}>
        <Item>size=4</Item>
      </Grid2>
      <Grid2 size={3}>
        <Item>size=4</Item>
      </Grid2>
      <Grid2 size={9}>
        <Item>size=9</Item>
      </Grid2> */}
    </Grid2>
  );
};

export default Grid;
