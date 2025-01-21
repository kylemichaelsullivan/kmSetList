import Song from './Song';
import NoSongs from '@/components/NoSongs';
import AddSong from './AddSong';

import { useCatalog } from '@/context/catalog';

function Editing() {
	const { catalog } = useCatalog();
	const alphabeticalCatalog = [...catalog].sort();

	return (
		<div className='Editing flex w-full flex-col items-center gap-4 p-4'>
			{catalog.length > 0 ? (
				<div className='Songs flex w-full flex-col gap-4'>
					{alphabeticalCatalog.map((song: string) => (
						<Song song={song} key={song} />
					))}
				</div>
			) : (
				<NoSongs />
			)}

			<AddSong />
		</div>
	);
}

export default Editing;
