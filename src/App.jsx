import { useState } from "react";
import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function toggleActivePlayer(rowIndex, colIndex) {
    if (rowIndex === undefined && colIndex === undefined) {
      setGameTurns([]);
      setActivePlayer("X");
      return;
    }

    setGameTurns((prev) => [
      { player: activePlayer, row: rowIndex + 1, col: colIndex + 1 },
      ...prev,
    ]);

    setActivePlayer((curActivePlayer) => {
      return curActivePlayer === "X" ? "O" : "X";
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <PlayerInfo
              playerName='Player 1'
              playerSymbol='X'
              isActive={activePlayer === "X"}
            />
            <PlayerInfo
              playerName='Player 2'
              playerSymbol='O'
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={toggleActivePlayer}
            activePlayer={activePlayer}
          />
        </div>
        <Log gameTurns={gameTurns} />
      </main>
    </>
  );
}

export default App;
