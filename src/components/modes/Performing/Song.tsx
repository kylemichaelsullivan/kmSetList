import { forwardRef, type RefObject } from 'react';

import { useSetlist } from '@/context/setlist';

import Meta from './Meta';

import type { Notes, TSong } from '@/types';

type SongProps = {
	song: TSong;
	songRefs: RefObject<(HTMLButtonElement | null)[]>;
	resetSetlistRef: RefObject<HTMLButtonElement | null>;
};

const Song = forwardRef<HTMLButtonElement, SongProps>(
	({ song, songRefs, resetSetlistRef }, ref) => {
		const { setlist, hasPlayed, toggleHasPlayed } = useSetlist();
		const [songName, key, bpm] = song;

		const handleClick = () => {
			toggleHasPlayed(songName);
			if (!hasPlayed[songName]) {
				const thisSongIndex = setlist.findIndex((s) => s[0] === songName);
				const thisSong =
					thisSongIndex < setlist.length ? setlist[thisSongIndex] : null;

				const nextSongIndex = thisSongIndex + 1;
				const nextSong =
					nextSongIndex < setlist.length ? setlist[nextSongIndex] : null;

				if (thisSong) {
					toggleHasPlayed(thisSong[0]);
				}
				if (nextSong && songRefs.current) {
					const nextSongRef = songRefs.current[nextSongIndex];
					nextSongRef?.focus();
				} else {
					resetSetlistRef.current?.focus();
				}
			}
		};

		return (
			<button
				type='button'
				ref={ref}
				className={`Song flex justify-between w-full cursor-pointer rounded-md border border-transparent px-4 shadow-md py-2 transition duration-200 ease-in-out${hasPlayed[songName] ? ' played' : ''} hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 print:text-black`}
				title={`${hasPlayed[songName] ? 'Enable' : 'Disable'} ${songName}`}
				onClick={handleClick}
			>
				{songName}
				<Meta note={key as Notes} bpm={bpm} />
			</button>
		);
	},
);

export default Song;
