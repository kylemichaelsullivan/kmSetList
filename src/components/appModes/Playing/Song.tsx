import { forwardRef, type RefObject } from 'react';

import { useSetlist } from '@/context/setlist';

import Meta from './Meta';

import type { Notes, Song } from '@/types';

type SongProps = {
	song: Song;
	songRefs: RefObject<(HTMLButtonElement | null)[]>;
	restoreSetlistRef: RefObject<HTMLButtonElement | null>;
};

const Song = forwardRef<HTMLButtonElement, SongProps>(
	({ song, songRefs, restoreSetlistRef }, ref) => {
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

		return (
			<div className='Song flex justify-between gap-4 w-full'>
				<button
					type='button'
					ref={ref}
					className={`flex justify-between w-full rounded-md border border-transparent px-4 shadow-md py-2 transition duration-200 ease-in-out${hasPlayed[name] ? ' played' : ''} hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 print:text-black`}
					title={`${hasPlayed[name] ? 'I haven’t played' : 'I’ve played'} ${name}`}
					onClick={handleClick}
				>
					{name}
					<Meta note={songKey as Notes} bpm={bpm} />
				</button>
			</div>
		);
	},
);

export default Song;
