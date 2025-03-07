import { useSetlist } from '@/context/setlist';

import Song from './Song';

import type { Song as TSong } from '@/types';

function Songs() {
	const { setlist } = useSetlist();

	return (
		<div className='Songs flex w-full flex-col gap-4'>
			{setlist.map((song: TSong, index: number) => (
				<Song
					songName={song.name}
					isFirst={index === 0}
					isLast={index === setlist.length - 1}
					key={song.updatedAt}
				/>
			))}
		</div>
	);
}

export default Songs;
