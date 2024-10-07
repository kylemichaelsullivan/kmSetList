import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type DeleteSongProps = {
  song: string;
};

function DeleteSong({ song }: DeleteSongProps) {
  function confirmDelete() {
    if (
      confirm(
        `Are you sure you want to DELETE ${song}?\nThis action cannot be undone.`,
      )
    ) {
      // User clicked "OK"
      alert(`${song} has been deleted.`);
    }
  }

  return (
    <button
      type="button"
      className="DeleteSong flex-1 text-gray-500 min-w-4 transition-colors duration-300 hover:text-gray-900"
      title={`Delete ${song} from Catalog`}
      onClick={confirmDelete}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default DeleteSong;
