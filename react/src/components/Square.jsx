import { useState } from "react";

const Square = ({ turn, setTurn }) => {
  const [value, setValue] = useState(null);
  console.log(turn);
  const handleClick = () => {
    if (value) return;
    if (turn === "first") {
      setValue("X");
      setTurn("second");
    } else {
      setValue("O");
      setTurn("first");
    }
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
