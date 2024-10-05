import Song from './Song';
import SliderReset from '@/components/modes/Performing/SliderReset';

import { useSetlist } from '@/context/setlist';

function Performing() {
  const { setlist } = useSetlist();

  return (
    <div className="Performing flex flex-col gap-4 w-full p-4">
      <div className="Songs flex flex-col gap-4">
        {setlist.length > 0 &&
          setlist.map((song: string) => <Song song={song} key={song} />)}
      </div>

      <SliderReset />
    </div>
  );
}

export default Performing;
