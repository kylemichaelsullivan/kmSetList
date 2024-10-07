import Song from './Song';
import NoSongs from '@/components/NoSongs';
import AddSong from './AddSong';
import SliderRemoveAll from './SliderRemoveAll';

import { useSetlist } from '@/context/setlist';

function Selecting() {
  const { setlist } = useSetlist();

  return (
    <div className="Selecting flex flex-col items-center gap-4 w-full p-4">
      {setlist.length > 0 ? (
        <>
          <div className="Songs flex flex-col gap-4 w-full">
            {setlist.map((song: string, index: number) => (
              <Song
                song={song}
                isFirst={index === 0}
                isLast={index === setlist.length - 1}
                key={song}
              />
            ))}
          </div>

          <AddSong />

          <SliderRemoveAll />
        </>
      ) : (
        <NoSongs />
      )}
    </div>
  );
}

export default Selecting;
