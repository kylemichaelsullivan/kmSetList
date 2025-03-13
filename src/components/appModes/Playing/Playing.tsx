import { useSetlist } from '@/context/setlist';

import PlayingModes from './playingModes/PlayingModes';
import NoSongs from '@/components/NoSongs';

function Playing() {
	const { setlist } = useSetlist();

	return (
		<div className='Playing flex w-full flex-col items-center gap-4 p-4'>
			{setlist.length > 0 ? <PlayingModes /> : <NoSongs />}
		</div>
	);
}

export default Playing;
