import { useState } from "react";
import checkWinner from "../helpers/checkWinner";
import ModalComponent from "./Modal";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const restartButton = {
  border: "2px solid #c3ba7828",
  borderRadius: "10px",
  padding: "0.5rem 1rem",
  background: "none",
  color: "#c3ba78",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "color 0.2s",
  textAlign: "center",
};

export default function GameBoard({ onSelectSquare, activePlayer, players }) {
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [winner, setWinner] = useState(null);

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
            setWinner("It's a draw! Try again!");
            setModalIsOpen(true);
            return;
          } else {
            setModalIsOpen(true);
            setWinner(players[winner]);
          }
        }, 100);
      }

      return updatedGameBoard;
    });

    onSelectSquare(rowIndex, colIndex);
  }

  function restartGame() {
    setWinner(null);
    setGameBoard(INITIAL_GAME_BOARD);
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
        <button style={restartButton} onClick={restartGame}>
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
