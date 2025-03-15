import { type RefObject } from 'react';

import { useSetlist } from '@/context/setlist';
import { useUser } from '@/context/user';

import Song from './Song';

import type { Song as TSong } from '@/types';

type SongsProps = {
	songRefs: RefObject<(HTMLButtonElement | null)[]>;
	restoreSetlistRef: RefObject<HTMLButtonElement | null>;
	modalNotesRef: RefObject<HTMLTextAreaElement | null>;
	handleNoteClick: (song: TSong) => void;
};

function Songs({
	songRefs,
	restoreSetlistRef,
	modalNotesRef,
	handleNoteClick,
}: SongsProps) {
	const { playingMode } = useUser();
	const { setlist } = useSetlist();

	return (
		<div
			className='Songs relative flex w-full flex-col gap-4'
			data-mode={playingMode}
		>
			{setlist.map((song: TSong, index: number) => (
				<Song
					song={song}
					ref={(el: HTMLButtonElement | null) => {
						if (songRefs.current) {
							songRefs.current[index] = el;
						}
					}}
					songRefs={songRefs}
					restoreSetlistRef={restoreSetlistRef}
					handleNoteClick={handleNoteClick}
					modalNotesRef={modalNotesRef}
					key={song.updatedAt}
				/>
			))}
		</div>
	);
}

export default Songs;
