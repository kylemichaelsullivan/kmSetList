import { useCatalog } from '@/context/catalog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import type { TSong } from '@/types';

type RemoveSongProps = {
	song: TSong;
};

function RemoveSong({ song }: RemoveSongProps) {
	const songName = song[0];
	const { removeSongFromCatalog } = useCatalog();

	const confirmDelete = () => {
		if (
			confirm(
				`Are you sure you want to DELETE ${songName}?\nThis cannot be undone.`,
			)
		) {
			removeSongFromCatalog(songName);
		}
	};

	return (
		<button
			type='button'
			className='RemoveSong min-w-4 text-gray-500 mt-1 w-8 h-8 transition-colors duration-300 hover:text-gray-900'
			title={`Delete ${songName} (from catalog)`}
			onClick={confirmDelete}
		>
			<FontAwesomeIcon icon={faTrash} />
		</button>
	);
}

export default RemoveSong;
