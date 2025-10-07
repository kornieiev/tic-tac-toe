import { useState } from "react";

export default function PlayerInfo({
  playerName,
  playerSymbol,
  isActive,
  setPlayers,
}) {
  const [name, setName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prev) => {
      // Если переходим из режима редактирования в обычный (сохраняем)
      if (prev) {
        setPlayers((prevPlayers) => ({ 
          ...prevPlayers, 
          [playerSymbol]: name 
        }));
      }
      return !prev;
    });
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className='player'>
        {isEditing ? (
          <input
            type='text'
            required
            placeholder={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <span className='player-name'>{name}</span>
        )}
        <span className='player-symbol'>{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
