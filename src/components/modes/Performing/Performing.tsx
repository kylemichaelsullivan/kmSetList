import Song from './Song';
import ResetSetlist from '@/components/modes/Performing/ResetSetlist';
import NoSongs from '@/components/NoSongs';

import { useSetlist } from '@/context/setlist';

function Performing() {
  const { setlist } = useSetlist();

  return (
    <div className="Performing flex flex-col gap-4 items-center w-full p-4">
      {setlist.length > 0 ? (
        <>
          <div className="Songs flex flex-col gap-4 w-full">
            {setlist.map((song: string) => (
              <Song song={song} key={song} />
            ))}
          </div>

          <ResetSetlist />
        </>
      ) : (
        <NoSongs />
      )}
    </div>
  );
}

export default Performing;
