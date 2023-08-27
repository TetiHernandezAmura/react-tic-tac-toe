import { useState } from "react";
import "./TicTacToe.css";
import Board from "./Board";

const TicTacToe = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    setHistory([...history, nextSquares]);
  };

  return (
    <div className="game-wrapper">
      <h1>Tic Tac Toe!</h1>

      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
