import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

import { useSetlist } from '@/context/setlist';

function RestoreSetlist() {
  const { restoreSetlist } = useSetlist();

  return (
    <button
      type="button"
      className="RestoreSetlist flex justify-center items-center border border-current rounded-full ring-blue-500 font-bold text-xxxl w-8 h-8 transition-colors duration-300 hover:bg-white hover:text-black hover:ring"
      title="Reset Setlist"
      onClick={restoreSetlist}
    >
      <FontAwesomeIcon icon={faRotate} />
    </button>
  );
}

export default RestoreSetlist;
