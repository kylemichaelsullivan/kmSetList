import { useEffect, useState, useRef } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

import { useCatalog } from '@/context/catalog';
import { useSetlist } from '@/context/setlist';

import AddSongButton from './AddSongButton';
import NoSongs from '@/components/NoSongs';

function AddSong() {
	const { catalog } = useCatalog();
	const { setlist, selectSong, handleSelectSong, addSongToSetlist } =
		useSetlist();
	const selectRef = useRef<HTMLSelectElement | null>(null);

	// keyWord: type so it's only songs
	const [unselectedSongs, setUnselectedSongs] = useState<string[]>([]);

	function getUnselectedSongs() {
		return catalog.filter((song) => !setlist.includes(song));
	}

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		handleSelectSong(e.target.value);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLSelectElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			selectSong && addSongToSetlist();
		}
	};

	const focusOnSelect = () => {
		if (!selectSong && selectRef.current) {
			selectRef.current.focus();
		}
	};

	useEffect(() => {
		if (catalog && setlist) {
			setUnselectedSongs(getUnselectedSongs().map((song) => song.name));
		}
	}, [catalog, setlist]);

	return (
		<div className='AddSong group flex w-full items-center gap-2'>
			{unselectedSongs.length > 0 ? (
				<>
					<div className='song w-full flex-auto cursor-grab rounded-md border border-current bg-white p-2 shadow-lg ring-blue-500 group-hover:ring'>
						<select
							ref={selectRef}
							className='w-full bg-transparent'
							value={selectSong}
							onKeyDown={handleKeyDown}
							onChange={handleSelectChange}
						>
							<option value='' disabled>
								[select a song]
							</option>
							{unselectedSongs.map((songName) => (
								<option value={songName} key={songName}>
									{songName}
								</option>
							))}
						</select>
					</div>

					<AddSongButton focusOnSelect={focusOnSelect} />
				</>
			) : (
				<div className='song w-full flex-auto border border-current bg-white p-2 shadow-lg'>
					<NoSongs />
				</div>
			)}
		</div>
	);
}

export default AddSong;
