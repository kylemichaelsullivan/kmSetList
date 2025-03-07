import { memo, useCallback } from 'react';

import { useCatalog } from '@/context/catalog';
import { useSongState } from '@/hooks/useSongState';

import type { Song } from '@/types';

import ToggleSongIsActive from './ToggleSongIsActive';
import SongDetails from './SongDetails';
import SongActions from './SongActions';

interface SongProps {
	song: Song;
}

const Song = memo(function Song({ song }: SongProps) {
	const { catalog, handleCatalogChange } = useCatalog();
	const { isExpanded, isEditing, handlers } = useSongState(song);

	const handleUpdate = useCallback(
		(updates: Partial<Song>) => {
			const updatedSong = { ...song, ...updates, updatedAt: Date.now() };
			const newCatalog = catalog.map((s: Song) =>
				s.name === song.name ? updatedSong : s,
			);
			handleCatalogChange(newCatalog);
		},
		[song, catalog, handleCatalogChange],
	);

	return (
		<div className='Song group flex w-full gap-4'>
			<ToggleSongIsActive song={song} toggleIsActive={handlers.toggleActive} />

			<SongDetails
				song={song}
				isExpanded={isExpanded}
				isEditing={isEditing}
				toggleIsExpanded={handlers.toggleExpanded}
				onUpdate={handleUpdate}
			/>

			<SongActions
				song={song}
				isExpanded={isExpanded}
				isEditing={isEditing}
				// toggleIsEditing={handlers.toggleEditing}
			/>
		</div>
	);
});

export default Song;
