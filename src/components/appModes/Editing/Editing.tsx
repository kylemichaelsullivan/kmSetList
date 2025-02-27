import { useState } from 'react';

import Songs from './Songs';
import NoSongs from '@/components/NoSongs';
import AddSongButton from './AddSongButton';
import AddSongFields from './AddSongFields';

import { useCatalog } from '@/context/catalog';

function Editing() {
	const { catalog } = useCatalog();
	const alphabeticalCatalog = [...catalog].sort();

	const [isAdding, setIsAdding] = useState(false);

	const handleAddSong = () => {
		setIsAdding(true);
	};

	return (
		<div className='Editing flex gap-4 w-full flex-col items-center p-4'>
			{catalog.length > 0 ? <Songs songs={alphabeticalCatalog} /> : <NoSongs />}

			<AddSongButton isAdding={isAdding} handleAddSong={handleAddSong} />

			{isAdding && <AddSongFields />}
		</div>
	);
}

export default Editing;
