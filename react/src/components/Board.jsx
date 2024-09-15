import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [turn, setTurn] = useState("first");

  return (
    <>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn}/>
        <Square turn={turn} setTurn={setTurn}/>
        <Square turn={turn} setTurn={setTurn}/>
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn}/>
        <Square turn={turn} setTurn={setTurn}/>
        <Square turn={turn} setTurn={setTurn}/>
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn}/>
        <Square turn={turn} setTurn={setTurn}/>
        <Square turn={turn} setTurn={setTurn}/>
      </div>
    </>
  );
};

export default Board;
