export default function Log({ gameTurns }) {
  return (
    <ol id='log'>
      {gameTurns.map((turn, i) => (
        <li key={i}>
          Player: {turn.player} - Row: {turn.row} - Col: {turn.col}
        </li>
      ))}
    </ol>
  );
}
