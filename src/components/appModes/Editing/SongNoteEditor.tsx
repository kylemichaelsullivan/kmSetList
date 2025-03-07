import { memo } from 'react';

import { useUser } from '@/context/user';

import type { Song } from '@/types';

type SongNoteEditorProps = {
	song: Song;
	isExpanded: boolean;
	isEditing: boolean;
	handleChange: any;
};

const SongNoteEditor = memo(
	({ song, isExpanded, isEditing, handleChange }: SongNoteEditorProps) => {
		const { callMe } = useUser();

		const placeholderName = callMe ? `${callMe}'s` : 'My';

		return (
			<textarea
				className={`SongNoteEditor ${song.isActive && isExpanded && isEditing ? 'block' : 'hidden'} rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring`}
				placeholder={`${placeholderName} Notes for ${song.name}`}
				aria-label={`Notes for ${song.name}`}
				onChange={handleChange}
			></textarea>
		);
	},
);

export default SongNoteEditor;
