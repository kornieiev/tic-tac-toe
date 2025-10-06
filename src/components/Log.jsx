import { useState } from "react";

export default function Log({ gameTurns }) {
  const [log, setLog] = useState([]);

  console.log("gameTurns====", gameTurns);
  return (
    <ol id='log'>
      {gameTurns.map((turn, i) => {
        return (
          <li key={i}>
            Player: {turn[0]} - Row: {turn[1]} - Col: {turn[2]}
          </li>
        );
      })}
    </ol>
  );
}
