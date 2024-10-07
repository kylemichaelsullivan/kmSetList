import ToggleSong from '@/components/modes/Editing/ToggleSong';
import DeleteSong from '@/components/modes/Editing/DeleteSong';

type SongProps = {
  song: string;
};

function Song({ song }: SongProps) {
  return (
    <div className="Song flex gap-2 items-center w-full group">
      <ToggleSong song={song} />

      <input
        type="text"
        className="song border border-current rounded-md ring-blue-500 shadow-lg w-full px-4 py-2 group-hover:ring"
        name={song}
        defaultValue={song}
      />

      <DeleteSong song={song} />
    </div>
  );
}

export default Song;
