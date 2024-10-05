import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

import MoveSong from './MoveSong';

type SongProps = {
  song: string;
  isFirst: boolean;
  isLast: boolean;
};

function Song({ song, isFirst, isLast }: SongProps) {
  return (
    <div className="Song flex gap-2 w-full">
      <MoveSong song={song} isFirst={isFirst} isLast={isLast} />

      <div className="song flex-auto border border-current rounded-md shadow-lg w-full px-4 py-2">
        {song}
      </div>

      <button
        type="button"
        className="flex-1 min-w-4 transition-colors duration-300 hover:text-white"
      >
        <FontAwesomeIcon icon={faCircleMinus} />
      </button>
    </div>
  );
}

export default Song;
