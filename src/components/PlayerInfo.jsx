import { useState } from "react";

export default function PlayerInfo({ playerName, playerSymbol }) {
  const [name, setName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prev) => !prev);
  }

  return (
    <li>
      <span className='player'>
        {isEditing ? (
          <input
            type='text'
            required
            placeholder={name}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
