import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

type SongProps = {
  song: string;
};

function Song({ song }: SongProps) {
  return (
    <div className="Song flex gap-2 w-full">
      <div className="relative flex flex-col flex-no-wrap flex-1 min-w-4 after:up-down">
        <button
          type="button"
          className="rounded-t-md flex-1 z-10"
          title="Move Up"
        ></button>
        <button
          type="button"
          className="rounded-b-md flex-1 z-10"
          title="Move Down"
        ></button>
      </div>

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
