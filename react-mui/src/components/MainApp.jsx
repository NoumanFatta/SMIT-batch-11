import { useReducer, useRef } from "react";
import SS from "../assets/Screenshot_2024_02_25-1.jpeg";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, styled } from "@mui/material";
import Grid from "./Grid";
const ACTION_STRINGS = {
  toggleGrid: "TOGGLE_GRID",
  changeColor: "CHANGE_COLOR",
  changeName: "CHANGE_NAME",
};

const reducer = (state, action) => {
  if (action.name === ACTION_STRINGS.toggleGrid) {
    return { ...state, grid: !state.grid };
  } else if (action.name === ACTION_STRINGS.changeColor) {
    return { ...state, color: action.payload };
  } else if (action.name === ACTION_STRINGS.changeName) {
    const initialState = { ...state };
    initialState.details.fName = "Alex";
    return initialState;
    return { ...state, details: { ...state.details, fName: "Alex" } };
  }
  return state;
};

const StyledDiv = styled("div")(({ theme, customColor }) => ({
  background: customColor,
}));


const MainApp = () => {
  const [state, dispatch] = useReducer(reducer, {
    details: {
      fName: "John",
      lName: "Doe",
    },
    grid: true,
    color: "red",
  });
  const divRef = useRef();
  const getChildState = (state) => {
    console.log(state)
  }
  return (
    <>
      <img src={SS} alt="" />
      <p>{JSON.stringify(state.details)}</p>
      <button
        onClick={() => {
          dispatch({ name: ACTION_STRINGS.changeName });
        }}
      >
        Change First Name
      </button>
      <StyledDiv ref={divRef} customColor={state.color}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </StyledDiv>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        onClick={() => {
          dispatch({ name: ACTION_STRINGS.changeColor, payload: "green" });
        }}
      >
        Change Color
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => {
          dispatch({ name: ACTION_STRINGS.toggleGrid });
        }}
      >
        Toggle Grid Visibility
      </Button>
      {state.grid && <Grid getChildState = {getChildState} />}
    </>
  );
};

export default MainApp;
