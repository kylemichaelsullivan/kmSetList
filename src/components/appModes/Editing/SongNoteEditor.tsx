import { useUser } from '@/context/user';

import type { TSong } from '@/types';

type SongNoteEditorProps = {
	song: TSong;
};

function SongNoteEditor({ song }: SongNoteEditorProps) {
	const songName = song[0];

	const { callMe } = useUser();

	const placeholderName = callMe ? `${callMe}'s` : 'My';

	return (
		<textarea
			className='SongNoteEditor rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
			placeholder={`${placeholderName} Notes for ${songName}`}
		></textarea>
	);
}

export default SongNoteEditor;
