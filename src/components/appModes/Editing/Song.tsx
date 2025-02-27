import { useState } from 'react';

import { useCatalog } from '@/context/catalog';

import ToggleSongIsActive from './ToggleSongIsActive';
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

	const toggleIsActive = (songName: string) => {
		if (!isActive) {
			setIsExpanded(false);
			setIsEditing(false);
		}
		toggleSongInCatalog(songName);
	};

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
			<ToggleSongIsActive
				songName={songName}
				isActive={isActive}
				toggleIsActive={() => toggleIsActive(songName)}
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
