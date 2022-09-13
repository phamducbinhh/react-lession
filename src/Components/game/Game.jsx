import React from "react";
import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./Helper";
import "./style.css";

function Game() {
  const [state, setState] = useState({
    board: Array(9).fill(null),
    turn: true,
  });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const copyBoard = [...state.board];
    if (winner || copyBoard[index]) return;
    copyBoard[index] = state.turn ? "X" : "O";
    setState({
      ...state,
      board: copyBoard,
      turn: !state.turn,
    });
  };

  const handleResetGame = () => {
    setState({
      board: Array(9).fill(null),
      turn: true,
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      <button onClick={handleResetGame}>Reset</button>
      {winner && <h1>Winner is {winner}</h1>}
      {!winner && <h1>Next player is {state.turn ? "X" : "O"}</h1>}
    </div>
  );
}

export default Game;
