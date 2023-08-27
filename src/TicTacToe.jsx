import "./TicTacToe.css";
import Board from "./Board";

const TicTacToe = () => {
  return (
    <div className="game-wrapper">
      <div>
        <h1>Tic Tac Toe!</h1>
        <Board />
      </div>
    </div>
  );
};

export default TicTacToe;
