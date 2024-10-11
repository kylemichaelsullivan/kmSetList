import { useCatalog } from '@/context/catalog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddSong() {
  const { addSongToCatalog } = useCatalog();
  function _addSongToCatalog() {
    addSongToCatalog();
  }

  return (
    <button
      type="button"
      className="AddSong flex justify-center items-center border border-current rounded-full ring-blue-500 font-bold text-xxxl w-8 h-8 transition-colors duration-300 hover:bg-black hover:text-white hover:ring"
      title="Add Song to Catalog"
      onClick={_addSongToCatalog}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default AddSong;
