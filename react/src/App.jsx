import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

const App = (props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button />
    </>
  );
};

export default App;
