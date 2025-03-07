import { memo } from 'react';

import Song from './Song';

import { Song as TSong } from '@/types';

type SongsProps = {
	songs: TSong[];
};

const Songs = memo(function Songs({ songs }: SongsProps) {
	return (
		<div className='Songs flex w-full flex-col gap-4'>
			{songs.map((song) => (
				<Song song={song} key={song.updatedAt} />
			))}
		</div>
	);
});

export default Songs;
