import Song from './Song';

import { useSetlist } from '@/context/setlist';

function Editing() {
  const { setlist } = useSetlist();

  return (
    <div className="Editing w-full p-4">
      <div className="Songs flex flex-col gap-4">
        {setlist.length > 0 &&
          setlist.map((song: string) => <Song song={song} key={song} />)}
      </div>
    </div>
  );
}

export default Editing;
