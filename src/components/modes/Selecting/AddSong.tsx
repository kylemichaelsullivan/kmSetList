import { useEffect, useState } from 'react';

import { useCatalog } from '@/context/catalog';
import { useSetlist } from '@/context/setlist';

import AddSongButton from './AddSongButton';
import NoSongs from '@/components/NoSongs';

function AddSong() {
	const { catalog } = useCatalog();
	const { setlist, selectSong, handleSelectSong } = useSetlist();

	// keyWord: type so it's only songs
	const [unselectedSongs, setUnselectedSongs] = useState<string[]>([]);

	function getUnselectedSongs() {
		return catalog.filter((song) => !setlist.includes(song));
	}

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		handleSelectSong(e.target.value);
	};

	useEffect(() => {
		if (catalog && setlist) {
			setUnselectedSongs(getUnselectedSongs());
		}
	}, [catalog, setlist]);

	return (
		<div className='AddSong group flex w-full items-center gap-2'>
			<div className='song w-full flex-auto cursor-grab rounded-md border border-current bg-white p-2 shadow-lg ring-blue-500 group-hover:ring'>
				{unselectedSongs ? (
					<select
						className='w-full bg-transparent'
						value={selectSong}
						onChange={handleSelectChange}
					>
						<option value='' disabled>
							[select a song]
						</option>
						{unselectedSongs.map((song) => (
							<option value={song} key={song}>
								{song}
							</option>
						))}
					</select>
				) : (
					<NoSongs />
				)}
			</div>

			<AddSongButton />
		</div>
	);
}

export default AddSong;
