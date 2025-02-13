import { useSetlist } from '@/context/setlist';

import Song from './Song';

import type { TSong } from '@/types';

function Songs() {
	const { setlist } = useSetlist();

	return (
		<div className='Songs flex w-full flex-col gap-4'>
			{setlist.map((song: TSong, index: number) => (
				<Song
					songName={song[0]}
					isFirst={index === 0}
					isLast={index === setlist.length - 1}
					key={song[0]}
				/>
			))}
		</div>
	);
}

export default Songs;
