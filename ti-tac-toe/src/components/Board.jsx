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
    console.log(i);
    if (squares[i]) return;
    if (endGame.winner.name || endGame.gameover) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
    const result = calculateWinner(squaresCopy)
    if (result) {
      setEndGame({
        gameover: true,
        winner: { name: result },
      });
    }
    if (squaresCopy.every((sq) => sq !== null)) {
      setEndGame((prev) => ({ ...prev, gameover: true }));
    }
  };
  const calculateWinner = (squares) => {
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
  };
  const sqrArray = [0, 1, 2];
  return (
    <>
      <p>Your Turn: {xIsNext ? "X" : "O"} </p>
      {endGame.winner.name && <h1> Winner is: {endGame.winner.name}</h1>}
      {!endGame.winner.name && endGame.gameover && <h1>Game is Over! </h1>}
      {sqrArray.map((vl, i) => {
        return (
          <div key={i} className="board-row">
            <Square
              value={squares[i * 3]}
              handleClick={() => handleClick(i * 3)}
            />
            <Square
              value={squares[i * 3 + 1]}
              handleClick={() => handleClick(i * 3 + 1)}
            />
            <Square
              value={squares[i * 3 + 2]}
              handleClick={() => handleClick(i * 3 + 2)}
            />
          </div>
        );
      })}
    </>
  );
};

export default Board;
