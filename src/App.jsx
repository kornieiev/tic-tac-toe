import { useState } from "react";
import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

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
              playerName={players.X}
              playerSymbol='X'
              isActive={activePlayer === "X"}
              setPlayers={setPlayers}
            />
            <PlayerInfo
              playerName={players.O}
              playerSymbol='O'
              isActive={activePlayer === "O"}
              setPlayers={setPlayers}
            />
          </ol>
          <GameBoard
            onSelectSquare={toggleActivePlayer}
            activePlayer={activePlayer}
            players={players}
          />
        </div>
        <Log gameTurns={gameTurns} />
      </main>
    </>
  );
}

export default App;
