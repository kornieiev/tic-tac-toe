import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  console.log("2activePlayer", activePlayer);

  function toggleActivePlayer() {
    setActivePlayer((curActivePlayer) => {
      console.log("1curActivePlayer", curActivePlayer);
      return curActivePlayer === "X" ? "O" : "X";
    });
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
          <ol id='players'>
            <PlayerInfo playerName='Player 1' playerSymbol='X' />
            <PlayerInfo playerName='Player 2' playerSymbol='O' />
          </ol>
          <GameBoard
            onSelectSquare={toggleActivePlayer}
            activePlayer={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
