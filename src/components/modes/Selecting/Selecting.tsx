import Songs from './Songs';
import NoSongs from '@/components/NoSongs';
import AddSong from './AddSong';
import SliderRemoveAll from './SliderRemoveAll';

import { useSetlist } from '@/context/setlist';

function Selecting() {
	const { setlist } = useSetlist();

	return (
		<div className='Selecting flex w-full flex-col items-center gap-4 p-4'>
			{setlist.length > 0 ? (
				<>
					<Songs />
					<AddSong />
					<SliderRemoveAll />
				</>
			) : (
				<>
					<AddSong />
					<NoSongs />
				</>
			)}
		</div>
	);
}

export default Selecting;
