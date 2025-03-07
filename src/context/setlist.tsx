import {
	type ReactNode,
	useState,
	createContext,
	useContext,
	useEffect,
} from 'react';

import { useCatalog } from '@/context/catalog';

import type { Song } from '@/types';
type Songs = Song[];

// keyWord: type to only be song
type SetlistContextType = {
	setlist: Songs;
	hasPlayed: { [key: string]: boolean };
	selectSong: string;
	handleSelectSong: (song: string) => void;
	handleSetlistChange: () => void;
	toggleHasPlayed: (song: string) => void;
	addSongToSetlist: () => void;
	moveUpSongInSetlist: (song: string) => void;
	moveDownSongInSetlist: (song: string) => void;
	removeSongFromSetlist: (song: string) => void;
	restoreSetlist: () => void;
	resetSetlist: () => void;
};

const SetlistContext = createContext<SetlistContextType | undefined>(undefined);

type SetlistContextProviderProps = {
	children: ReactNode;
};

const initialSetlistSongs: string[] = [
	'Choke',
	'Break Me',
	'All of You',
	'Scared',
	'Bed',
	'Get Straight',
	'Dallas',
	'Firework',
	'Glass',
	'Chances',
	'Jimmy',
];

export const SetlistContextProvider = ({
	children,
}: SetlistContextProviderProps) => {
	const { catalog } = useCatalog();

	const [setlist, setSetlist] = useState<Songs>([]);
	const [hasPlayed, setHasPlayed] = useState<{ [key: string]: boolean }>({});
	const [selectSong, setSelectSong] = useState<string>('');

	useEffect(() => {
		const initialSetlist: Songs = initialSetlistSongs
			.map((songName) => {
				const song = catalog.find((song: Song) => song.name === songName);
				if (!song) return null;
				return song;
			})
			.filter(Boolean) as Songs;

		setSetlist(initialSetlist);
		const initialHasPlayed = initialSetlist.reduce(
			(acc, song) => ({ ...acc, [song.name]: false }),
			{},
		);
		setHasPlayed(initialHasPlayed);
	}, [catalog]);

	function handleSetlistChange() {
		setSetlist(setlist);
	}

	function handleSelectSong(song: string) {
		setSelectSong(song);
	}

	// keyWord: type to only be song
	function addSongToSetlist() {
		if (selectSong) {
			const songToAdd = catalog.find((song) => song.name === selectSong);
			if (songToAdd) {
				setSetlist([...setlist, songToAdd]);
				setHasPlayed({ ...hasPlayed, [selectSong]: false });
				setSelectSong('');
			}
		}
	}

	function moveUpSongInSetlist(songName: string) {
		const index = setlist.findIndex((song) => song.name === songName);

		if (index > 0) {
			const newSetlist = [...setlist];
			[newSetlist[index - 1], newSetlist[index]] = [
				newSetlist[index],
				newSetlist[index - 1],
			];
			setSetlist(newSetlist);
		}
	}

	function moveDownSongInSetlist(songName: string) {
		const index = setlist.findIndex((song) => song.name === songName);

		if (index < setlist.length - 1) {
			const newSetlist = [...setlist];
			[newSetlist[index], newSetlist[index + 1]] = [
				newSetlist[index + 1],
				newSetlist[index],
			];
			setSetlist(newSetlist);
		}
	}

	function toggleHasPlayed(song: string) {
		const updatedHasPlayed = { ...hasPlayed, [song]: !hasPlayed[song] };
		setHasPlayed(updatedHasPlayed);
	}

	// keyWord: type to only be song
	function removeSongFromSetlist(songName: string) {
		if (songName) {
			setSetlist(setlist.filter((s) => s.name !== songName));
			const updatedHasPlayed = { ...hasPlayed };
			delete updatedHasPlayed[songName];
			setHasPlayed(updatedHasPlayed);
		}
	}

	function restoreSetlist() {
		setHasPlayed(
			Object.keys(hasPlayed).reduce(
				(acc, song) => ({ ...acc, [song]: false }),
				{},
			),
		);
	}

	function resetSetlist() {
		setSetlist([]);
	}

	return (
		<SetlistContext.Provider
			value={{
				setlist,
				hasPlayed,
				selectSong,
				handleSelectSong,
				handleSetlistChange,
				addSongToSetlist,
				moveUpSongInSetlist,
				moveDownSongInSetlist,
				removeSongFromSetlist,
				restoreSetlist,
				resetSetlist,
				toggleHasPlayed,
			}}
		>
			{children}
		</SetlistContext.Provider>
	);
};

export const useSetlist = (): SetlistContextType => {
	const context = useContext(SetlistContext);

	if (!context) {
		throw new Error(
			'useSetlist must be used within a <SetlistContextProvider />',
		);
	}

	return context;
};
