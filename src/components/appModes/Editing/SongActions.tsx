import { memo } from 'react';
import { useSong } from '@/context/song';

import RemoveSong from './RemoveSong';
import ToggleSongNotes from '@/components/appModes/Editing/ToggleSongNotes';

import type { Song } from '@/types';

interface SongActionsProps {
	song: Song;
	isExpanded: boolean;
	isEditing: boolean;
}

const SongActions = memo(
	({ song, isExpanded, isEditing }: SongActionsProps) => {
		const { songStates, toggleEditing, setSongStates } = useSong();
		const { noteContent } = songStates[song.name] || {};

		const hasNote = noteContent?.trim().length > 0;

		return (
			<div className='SongActions flex flex-col gap-4 items-center justify-start'>
				<RemoveSong song={song} />

				{song.isActive && isExpanded ? (
					<ToggleSongNotes
						song={song}
						isEditing={isEditing}
						hasNote={hasNote}
						toggleIsEditing={() => toggleEditing(song.name)}
					/>
				) : null}
			</div>
		);
	},
);

export default SongActions;
