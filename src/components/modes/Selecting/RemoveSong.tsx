import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

type RemoveSongProps = {
  song: string;
};

function RemoveSong({ song }: RemoveSongProps) {
  function removeSongFromSetlist() {
    alert(`removeSongFromSetlist(${song})`);
  }

  return (
    <button
      type="button"
      className="RemoveSong flex-1 text-gray-500 min-w-4 transition-colors duration-300 hover:text-gray-900"
      title={`Remove ${song} from Setlist`}
      onClick={removeSongFromSetlist}
    >
      <FontAwesomeIcon icon={faCircleMinus} />
    </button>
  );
}

export default RemoveSong;
