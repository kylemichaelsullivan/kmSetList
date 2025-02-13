import { type RefObject } from 'react';

import { useSetlist } from '@/context/setlist';

import Song from './Song';

import { TSong } from '@/types';

type SongsProps = {
	songRefs: RefObject<(HTMLButtonElement | null)[]>;
	resetSetlistRef: RefObject<HTMLButtonElement | null>;
};

function Songs({ songRefs, resetSetlistRef }: SongsProps) {
	const { setlist } = useSetlist();

	return (
		<div className='Songs flex w-full flex-col gap-4'>
			{setlist.map((song: TSong, index: number) => (
				<Song
					song={song}
					key={index}
					ref={(el: HTMLButtonElement | null) => {
						if (songRefs.current) {
							songRefs.current[index] = el;
						}
					}}
					songRefs={songRefs}
					resetSetlistRef={resetSetlistRef}
				/>
			))}
		</div>
	);
}

export default Songs;
