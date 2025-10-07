import { useState } from "react";
import checkWinner from "../helpers/checkWinner";
import ModalComponent from "./Modal";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [winner, setWinner] = useState(null);
  console.log("winner", winner);

  function handleSelectField(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex]) {
      return;
    }
    if (winner) {
      return;
    }

    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      updatedGameBoard[rowIndex][colIndex] = activePlayer;

      const winner = checkWinner(updatedGameBoard);
      if (winner) {
        setTimeout(() => {
          if (winner === "draw") {
            setWinner("Try again!");
            setModalIsOpen(true);
            return;
          } else {
            setModalIsOpen(true);
            setWinner(`Winner: ${winner}`);
          }
        }, 100);
      }

      return updatedGameBoard;
    });

    onSelectSquare(rowIndex, colIndex);
  }

  function restartGame() {
    setWinner(null);
    setGameBoard(initialGameBoard);
    onSelectSquare();
  }

  return (
    <>
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
      {winner && (
        <button
          style={{
            border: "2px solid #c3ba7828",
            borderRadius: "10px",
            padding: "0.5rem 1rem",
            background: "none",
            color: "#c3ba78",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "color 0.2s",
            textAlign: "center",
          }}
          onClick={restartGame}
        >
          RESTART GAME
        </button>
      )}
      {winner && (
        <ModalComponent
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          winner={winner}
          restartGame={restartGame}
        ></ModalComponent>
      )}
    </>
  );
}
