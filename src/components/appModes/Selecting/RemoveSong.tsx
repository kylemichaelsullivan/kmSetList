import { useSetlist } from '@/context/setlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

type RemoveSongProps = {
	songName: string;
};

function RemoveSong({ songName }: RemoveSongProps) {
	const { removeSongFromSetlist } = useSetlist();

	return (
		<button
			type='button'
			className='RemoveSong min-w-4 flex-1 text-gray-500 transition-colors duration-300 hover:text-gray-900'
			title={`Remove ${songName} (from setlist)`}
			onClick={() => removeSongFromSetlist(songName)}
		>
			<FontAwesomeIcon icon={faCircleMinus} />
		</button>
	);
}

export default RemoveSong;
