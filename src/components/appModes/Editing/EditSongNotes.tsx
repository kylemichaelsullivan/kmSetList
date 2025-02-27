import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

import { TSong } from '@/types';

type EditSongNotesProps = {
	song: TSong;
	toggleIsEditing: () => void;
};

function EditSongNotes({ song, toggleIsEditing }: EditSongNotesProps) {
	const songName = song[0];

	return (
		<button
			type='button'
			className='EditSongNotes min-w-4 text-gray-500 mt-1 w-8 h-8 transition-colors duration-300 hover:text-gray-900'
			title={`Notes for ${songName}`}
			onClick={toggleIsEditing}
		>
			<FontAwesomeIcon icon={faNoteSticky} />
		</button>
	);
}

export default EditSongNotes;
