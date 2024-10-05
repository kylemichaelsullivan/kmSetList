import Song from './Song';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useSetlist } from '@/context/setlist';

function Selecting() {
  const { setlist } = useSetlist();

  return (
    <div className="Selecting flex flex-col items-center gap-4 w-full p-4">
      <div className="Songs flex flex-col gap-4 w-full">
        {setlist.length > 0 &&
          setlist.map((song: string) => <Song song={song} key={song} />)}
      </div>

      <button
        type="button"
        className="flex justify-center items-center border border-current rounded-full font-bold text-xxxl w-8 h-8 transition-colors duration-300 hover:bg-black hover:text-white hover:ring"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default Selecting;
