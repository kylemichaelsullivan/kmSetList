import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useSetlist } from '@/context/setlist';

function AddSong() {
  const { addSongToSetlist } = useSetlist();

  return (
    <button
      type="button"
      className="AddSong flex justify-center items-center border border-current ring-blue-500 rounded-full font-bold text-xxxl w-8 h-8 transition-colors duration-300 hover:bg-black hover:text-white hover:ring"
      title="Add Song to Setlist"
      onClick={addSongToSetlist}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default AddSong;
