import { useSetlist } from '@/context/setlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

function AddSongButton() {
  const { addSongToSetlist } = useSetlist();

  function handleClick() {
    addSongToSetlist();
  }

  return (
    <button
      type="button"
      className="AddSong flex justify-center items-center border border-current ring-blue-500 rounded-full text-xxl font-bold w-8 h-8 transition-colors duration-300 hover:bg-black hover:text-white hover:ring"
      title="Add Song to Setlist"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faThumbtack} />
    </button>
  );
}

export default AddSongButton;
