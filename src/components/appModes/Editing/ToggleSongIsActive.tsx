import { memo } from 'react';

import type { Song } from '@/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type ToggleSongIsActiveProps = {
	song: Song;
	toggleIsActive: () => void;
};

const ToggleSongIsActive = memo(function ToggleSongIsActive({
	song,
	toggleIsActive,
}: ToggleSongIsActiveProps) {
	return (
		<button
			type='button'
			className={`ToggleSongIsActive flex items-center justify-center rounded-full border border-black box-border ${song.isActive ? 'bg-gray-900' : 'bg-white'} text-white w-12 h-8 mt-1 transition-colors hover:bg-gray-500 ${song.isActive ? 'hover:text-white' : 'hover:text-gray-500'}`}
			title={song.isActive ? `Disable ${song.name}` : `Enable ${song.name}`}
			onClick={toggleIsActive}
		>
			<FontAwesomeIcon icon={faCheck} />
		</button>
	);
});

export default ToggleSongIsActive;
