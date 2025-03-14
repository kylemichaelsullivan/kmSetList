import { type RefObject } from 'react';

import { useSetlist } from '@/context/setlist';
import { useUser } from '@/context/user';

import RehearseSong from './RehearseSong';

import type { Song as TSong } from '@/types';

type RehearseSongsProps = {
	songRefs: RefObject<(HTMLButtonElement | null)[]>;
	restoreSetlistRef: RefObject<HTMLButtonElement | null>;
	modalNotesRef: RefObject<HTMLTextAreaElement | null>;
	handleNoteClick: (song: TSong) => void;
};

function RehearseSongs({
	songRefs,
	restoreSetlistRef,
	modalNotesRef,
	handleNoteClick,
}: RehearseSongsProps) {
	const { playingMode } = useUser();
	const { setlist } = useSetlist();

	return (
		<div
			className='RehearseSongs relative flex w-full flex-col gap-4'
			data-mode={playingMode}
		>
			{setlist.map((song: TSong, index: number) => (
				<RehearseSong
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

export default RehearseSongs;
