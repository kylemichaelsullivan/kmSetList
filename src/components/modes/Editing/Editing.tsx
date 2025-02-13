import Songs from './Songs';
import NoSongs from '@/components/NoSongs';
import AddSong from './AddSong';

import { useCatalog } from '@/context/catalog';

function Editing() {
	const { catalog } = useCatalog();
	const alphabeticalCatalog = [...catalog].sort();

	return (
		<div className='Editing flex gap-4 w-full flex-col items-center p-4'>
			{catalog.length > 0 ? <Songs songs={alphabeticalCatalog} /> : <NoSongs />}

			<AddSong />
		</div>
	);
}

export default Editing;
