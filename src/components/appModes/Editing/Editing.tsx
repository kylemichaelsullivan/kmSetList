import { useState, useMemo, useRef } from 'react';

import { useCatalog } from '@/context/catalog';
import { SongContextProvider } from '@/context/song';

import Songs from './Songs';
import NoSongs from '@/components/NoSongs';
import AddSongButton from './AddSongButton';
import AddSongFields from './AddSongFields';

function Editing() {
	const { catalog } = useCatalog();
	const alphabeticalCatalog = useMemo(() => [...catalog].sort(), [catalog]);

	const [isAdding, setIsAdding] = useState(false);
	const addSongSongRef = useRef<HTMLInputElement>(null);

	const toggleIsAdding = () => {
		setIsAdding(() => !isAdding);
	};

	const handleAddSong = () => {
		setIsAdding(true);
	};

	return (
		<div className='Editing flex gap-4 w-full flex-col items-center p-4'>
			{catalog.length > 0 ? (
				<SongContextProvider>
					<Songs songs={alphabeticalCatalog} />
				</SongContextProvider>
			) : (
				<NoSongs />
			)}

			<AddSongButton
				isAdding={isAdding}
				toggleIsAdding={toggleIsAdding}
				handleAddSong={handleAddSong}
				addSongSongRef={addSongSongRef}
			/>

			<AddSongFields isAdding={isAdding} addSongSongRef={addSongSongRef} />
		</div>
	);
}

export default Editing;
