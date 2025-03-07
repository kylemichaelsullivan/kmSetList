import { memo } from 'react';

import Title from './Title';
import Meta from './Meta';
import SongNoteEditor from './SongNoteEditor';

import type { Song } from '@/types';

interface SongDetailsProps {
	song: Song;
	isExpanded: boolean;
	isEditing: boolean;
	toggleIsExpanded: () => void;
	onUpdate?: (updates: Partial<Song>) => void;
}

const SongDetails = memo(
	({
		song,
		isExpanded,
		isEditing,
		toggleIsExpanded,
		onUpdate,
	}: SongDetailsProps) => {
		return (
			<div className='SongDetails flex flex-col gap-2 w-full'>
				<Title
					songName={song.name}
					isActive={song.isActive}
					isExpanded={isExpanded}
					toggleIsExpanded={toggleIsExpanded}
				/>

				{/* {song.isActive && isExpanded && ( */}
				<Meta
					song={song}
					isExpanded={isExpanded}
					onUpdate={onUpdate || (() => {})}
				/>
				{/* )} */}

				{/* {song.isActive && isExpanded && isEditing && ( */}
				<SongNoteEditor
					song={song}
					isExpanded={isExpanded}
					isEditing={isEditing}
				/>
				{/* )} */}
			</div>
		);
	},
);

export default SongDetails;
