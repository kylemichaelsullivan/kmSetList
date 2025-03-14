import { forwardRef, type RefObject } from 'react';

import { useSetlist } from '@/context/setlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

import Meta from '../Meta';

import type { Notes, Song } from '@/types';

type RehearseSongProps = {
	song: Song;
	songRefs: RefObject<(HTMLButtonElement | null)[]>;
	restoreSetlistRef: RefObject<HTMLButtonElement | null>;
	modalNotesRef: RefObject<HTMLTextAreaElement | null>;
	handleNoteClick: (song: Song) => void;
};

const RehearseSong = forwardRef<HTMLButtonElement, RehearseSongProps>(
	(
		{ song, songRefs, restoreSetlistRef, modalNotesRef, handleNoteClick },
		ref,
	) => {
		const { setlist, hasPlayed, toggleHasPlayed } = useSetlist();

		const { name, songKey, bpm } = song;

		const handleClick = () => {
			toggleHasPlayed(name);
			if (!hasPlayed[name]) {
				const thisSongIndex = setlist.findIndex((s: Song) => s.name === name);
				const thisSong =
					thisSongIndex < setlist.length ? setlist[thisSongIndex] : null;

				const nextSongIndex = thisSongIndex + 1;
				const nextSong =
					nextSongIndex < setlist.length ? setlist[nextSongIndex] : null;

				if (thisSong) {
					toggleHasPlayed(thisSong.name);
				}
				if (nextSong && songRefs.current) {
					const nextSongRef = songRefs.current[nextSongIndex];
					nextSongRef?.focus();
				} else {
					restoreSetlistRef.current?.focus();
				}
			}
		};

		const handleNoteButtonClick = () => {
			handleNoteClick(song);
			modalNotesRef.current?.focus();
		};

		return (
			<div className='RehearseSong Song flex justify-between gap-4 w-full'>
				<button
					type='button'
					className={`flex justify-between w-full rounded-md border border-transparent px-4 shadow-md py-2 transition duration-200 ease-in-out${hasPlayed[name] ? ' played' : ''} hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 print:text-black`}
					title={`${hasPlayed[name] ? 'I haven’t played' : 'I’ve played'} ${name}`}
					ref={ref}
					onClick={handleClick}
				>
					{name}
					<Meta note={songKey as Notes} bpm={bpm} />
				</button>

				<button
					type='button'
					className={`text-gray-500 min-w-4 mt-2 w-8 h-8 transition-colors duration-300 hover:text-white${hasPlayed[name] ? ' played' : ''}`}
					title={`Notes for ${name}`}
					onClick={handleNoteButtonClick}
				>
					<FontAwesomeIcon icon={faNoteSticky} />
				</button>
			</div>
		);
	},
);

export default RehearseSong;
