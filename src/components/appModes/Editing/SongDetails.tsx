import Title from './Title';
import Meta from './Meta';
import SongNoteEditor from './SongNoteEditor';

import type { TSong } from '@/types';

type SongDetailsProps = {
	song: TSong;
	isActive: boolean;
	isExpanded: boolean;
	isEditing: boolean;
	toggleIsExpanded: () => void;
};

function SongDetails({
	song,
	isActive,
	isExpanded,
	isEditing,
	toggleIsExpanded,
}: SongDetailsProps) {
	return (
		<div className='SongDetails flex flex-col gap-2 w-full'>
			<Title
				songName={song[0]}
				isActive={isActive}
				isExpanded={isExpanded}
				toggleIsExpanded={toggleIsExpanded}
			/>

			{isActive && isExpanded && <Meta song={song} />}
			{isActive && isExpanded && isEditing && <SongNoteEditor song={song} />}
		</div>
	);
}

export default SongDetails;
