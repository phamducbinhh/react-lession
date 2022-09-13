import React from "react";
import Cell from "./Cell";

function Board(props) {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-X" : item === "O" ? "is-O" : ""}
        />
      ))}
    </div>
  );
}

export default Board;
