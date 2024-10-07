import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type ToggleSongPtops = {
  song: string;
};

function ToggleSong({ song }: ToggleSongPtops) {
  function ToggleSong() {
    alert(`${song} toggled.`);
  }

  return (
    <button
      type="button"
      className="ToggleSong flex justify-center items-center border border-black rounded-full text-gray-500 w-8 h-8 transition-colors hover:text-gray-900"
      title={`Toggle ${song}`}
      onClick={ToggleSong}
    >
      <FontAwesomeIcon icon={faCheck} />
    </button>
  );
}

export default ToggleSong;
