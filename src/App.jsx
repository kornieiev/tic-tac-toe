import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function toggleActivePlayer(rowIndex, colIndex) {
    if (!rowIndex && !colIndex) {
      setGameTurns([]);
    }

    setActivePlayer((curActivePlayer) => {
      return curActivePlayer === "X" ? "O" : "X";
    });

    setGameTurns((prev) => [
      [activePlayer, rowIndex + 1, colIndex + 1],
      ...prev,
    ]);
  }

  return (
    <>
      {/* <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div> */}
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
          <Log gameTurns={gameTurns} />
        </div>
      </main>
    </>
  );
}

export default App;
