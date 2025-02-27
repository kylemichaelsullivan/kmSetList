import Song from './Song';

import { TSong } from '@/types';

type SongsProps = {
	songs: TSong[];
};

function Songs({ songs }: SongsProps) {
	return (
		<div className='Songs flex w-full flex-col gap-4'>
			{songs.map((song) => (
				<Song song={song} key={song[0]} />
			))}
		</div>
	);
}

export default Songs;
