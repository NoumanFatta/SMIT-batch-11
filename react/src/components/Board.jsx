import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [endGame, setEndGame] = useState({
    gameover: false,
    winner: {
      name: "",
    },
  });
  const handleClick = (i) => {
    if (squares[i]) return;
    if (endGame.winner.name || endGame.gameover) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
    if (calculateWinner(squaresCopy)) {
      setEndGame({
        gameover: true,
        winner: { name: calculateWinner(squaresCopy) },
      });
    }
    if (squaresCopy.every((sq) => sq !== null)) {
      setEndGame({ gameover: true, winner: { name: "" } });
    }
  };
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  
  return (
    <>
      <p>Your Turn: {xIsNext ? "X" : "O"} </p>
      {endGame.winner.name && <h1> Winner is: {endGame.winner.name}</h1>}
      {!endGame.winner.name && endGame.gameover && <h1>Game is Over! </h1>}
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
