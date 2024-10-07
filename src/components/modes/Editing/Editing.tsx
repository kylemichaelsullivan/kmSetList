import Song from './Song';
import NoSongs from '@/components/NoSongs';
import AddSong from './AddSong';

import { useSetlist } from '@/context/setlist';

function Editing() {
  const { setlist } = useSetlist();
  const alphabeticalSetlist = [...setlist].sort();

  return (
    <div className="Editing flex flex-col items-center gap-4 w-full p-4">
      {setlist.length > 0 ? (
        <div className="Songs flex flex-col gap-4 w-full">
          {alphabeticalSetlist.map((song: string) => (
            <Song song={song} key={song} />
          ))}
        </div>
      ) : (
        <NoSongs />
      )}

      <AddSong />
    </div>
  );
}

export default Editing;
