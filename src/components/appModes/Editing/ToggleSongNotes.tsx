import { memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faNoteSticky,
	faNotesMedical,
} from '@fortawesome/free-solid-svg-icons';

import type { Song } from '@/types';

interface ToggleSongNotesProps {
	song: Song;
	isEditing: boolean;
	hasNote: boolean;
	toggleIsEditing: () => void;
}

const ToggleSongNotes = memo(
	({ song, isEditing, hasNote, toggleIsEditing }: ToggleSongNotesProps) => {
		return (
			<button
				type='button'
				className={`ToggleSongNotes min-w-4 ${hasNote ? 'text-gray-500 hover:text-gray-900' : 'text-gray-400'} mt-1 w-8 h-8 transition-colors duration-300`}
				title={
					!hasNote
						? isEditing
							? `Collapse ${song.name}`
							: `Add Notes for ${song.name}`
						: isEditing
							? `Collapse ${song.name}`
							: `Notes for ${song.name}`
				}
				onClick={toggleIsEditing}
			>
				<FontAwesomeIcon icon={!hasNote ? faNotesMedical : faNoteSticky} />
			</button>
		);
	},
);

export default ToggleSongNotes;
