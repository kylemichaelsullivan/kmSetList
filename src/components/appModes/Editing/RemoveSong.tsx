import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useCatalog } from '@/context/catalog';
import type { Song } from '@/types';

interface RemoveSongProps {
	song: Song;
}

const RemoveSong = memo(({ song }: RemoveSongProps) => {
	const { removeSongFromCatalog } = useCatalog();

	const confirmDelete = () => {
		if (
			confirm(
				`Are you sure you want to DELETE ${song.name}?\nThis cannot be undone.`,
			)
		) {
			removeSongFromCatalog(song.name);
		}
	};

	return (
		<button
			type='button'
			className='RemoveSong min-w-4 text-gray-500 mt-1 w-8 h-8 transition-colors duration-300 hover:text-gray-900'
			title={`Delete ${song.name} (from catalog)`}
			onClick={confirmDelete}
		>
			<FontAwesomeIcon icon={faTrash} />
		</button>
	);
});

export default RemoveSong;
