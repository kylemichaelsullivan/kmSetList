import { useSetlist } from '@/context/setlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

function AddSongButton() {
  const { selectSong, addSongToSetlist } = useSetlist();

  function handleClick() {
    addSongToSetlist();
  }

  return (
    <button
      type="button"
      className={`AddSong flex justify-center items-center border border-current ring-blue-500 rounded-full ${selectSong ? 'text-black' : 'text-gray-400'} font-bold w-8 h-8 transition-colors duration-300 ${selectSong ? 'hover:bg-black hover:text-white hover:ring' : 'hover:bg-gray-400'}`}
      title={selectSong ? `Add ${selectSong} to Setlist` : 'Pick a Song First'}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faThumbtack} />
    </button>
  );
}

export default AddSongButton;
