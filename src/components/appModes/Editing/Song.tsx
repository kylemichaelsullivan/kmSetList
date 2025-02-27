import { useState } from 'react';

import { useCatalog } from '@/context/catalog';

import ToggleSong from './ToggleSong';
import SongDetails from './SongDetails';
import SongActions from './SongActions';

import type { TSong } from '@/types';

type SongProps = {
	song: TSong;
};

function Song({ song }: SongProps) {
	const { toggleSongInCatalog } = useCatalog();
	const songName = song[0];
	const isActive = song[3];

	const [isExpanded, setIsExpanded] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const toggleIsExpanded = () => {
		if (isExpanded) {
			setIsExpanded(false);
			setIsEditing(false);
		} else {
			setIsExpanded(!isExpanded);
		}
	};

	const toggleIsEditing = () => {
		if (isEditing) {
			setIsExpanded(false);
			setIsEditing(false);
		} else {
			setIsEditing(true);
		}
	};

	return (
		<div className='Song group flex w-full gap-4'>
			<ToggleSong
				songName={songName}
				isActive={isActive}
				toggleSong={() => toggleSongInCatalog(songName)}
			/>

			<SongDetails
				song={song}
				isActive={isActive}
				isExpanded={isExpanded}
				isEditing={isEditing}
				toggleIsExpanded={toggleIsExpanded}
			/>

			<SongActions
				song={song}
				isActive={isActive}
				isExpanded={isExpanded}
				toggleIsEditing={toggleIsEditing}
			/>
		</div>
	);
}

export default Song;
