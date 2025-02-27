import RemoveSong from './RemoveSong';
import EditSongNotes from '@/components/appModes/Editing/EditSongNotes';

import { TSong } from '@/types';

type SongActionsProps = {
	song: TSong;
	isActive: boolean;
	isExpanded: boolean;
	toggleIsEditing: () => void;
};

function SongActions({
	song,
	isActive,
	isExpanded,
	toggleIsEditing,
}: SongActionsProps) {
	return (
		<div className='SongActions flex flex-col gap-4 items-center justify-start'>
			<RemoveSong song={song} />
			{isActive && isExpanded ? (
				<EditSongNotes song={song} toggleIsEditing={toggleIsEditing} />
			) : (
				''
			)}
		</div>
	);
}

export default SongActions;
