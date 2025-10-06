import { useEffect, useState } from "react";
import checkWinner from "../helpers/checkWinner";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectField(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex]) {
      return;
    }

    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      updatedGameBoard[rowIndex][colIndex] = activePlayer;

      return updatedGameBoard;
    });

    onSelectSquare(rowIndex, colIndex);
  }

  useEffect(() => {
    setTimeout(() => {
      const winner = checkWinner(gameBoard);
      if (winner) {
        console.log("WINNER!!!");
        if (winner === "draw") {
          setGameBoard(initialGameBoard);
          onSelectSquare();
          alert("Ничья!");
        } else {
          setGameBoard(initialGameBoard);
          onSelectSquare();

          alert(`Победитель: ${winner}`);
        }
      }
    }, 200);
  }, [gameBoard]);

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => {
                      handleSelectField(rowIndex, colIndex);
                    }}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
