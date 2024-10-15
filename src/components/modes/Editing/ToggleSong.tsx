import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type ToggleSongPtops = {
  song: string;
};

function ToggleSong({ song }: ToggleSongPtops) {
  const [isActive, setIsActive] = useState();

  // I'm leaning hard on conventions to convey meaning here
  function toggleSong() {
    alert(`${song} toggled.`);
  }

  return (
    <button
      type="button"
      className={`ToggleSong flex justify-center items-center border border-black rounded-full ${true ? 'bg-gray-900' : 'bg-white'} text-white w-8 h-8 transition-colors hover:bg-gray-500`}
      title={isActive ? `Toggle ${song}` : `Toggle ${song}`}
      onClick={toggleSong}
    >
      <FontAwesomeIcon icon={faCheck} />
    </button>
  );
}

export default ToggleSong;
