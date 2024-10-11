import Song from './Song';
import NoSongs from '@/components/NoSongs';
import AddSong from './AddSong';

import { useCatalog } from '@/context/catalog';

function Editing() {
  const { catalog } = useCatalog();
  const alphabeticalCatalog = [...catalog].sort();

  return (
    <div className="Editing flex flex-col items-center gap-4 w-full p-4">
      {catalog.length > 0 ? (
        <div className="Songs flex flex-col gap-4 w-full">
          {alphabeticalCatalog.map((song: string) => (
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
