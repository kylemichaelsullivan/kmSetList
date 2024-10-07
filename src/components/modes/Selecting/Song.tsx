import MoveSong from './MoveSong';
import RemoveSong from './RemoveSong';

type SongProps = {
  song: string;
  isFirst: boolean;
  isLast: boolean;
};

function Song({ song, isFirst, isLast }: SongProps) {
  return (
    <div className="Song flex gap-2 items-center w-full group">
      <MoveSong song={song} isFirst={isFirst} isLast={isLast} />

      <div
        className="song flex-auto cursor-grab border border-current ring-blue-500 rounded-md shadow-lg w-full px-4 py-2 group-hover:ring"
        title={`Drag ${song} to Reorder`}
      >
        {song}
      </div>

      <RemoveSong song={song} />
    </div>
  );
}

export default Song;
