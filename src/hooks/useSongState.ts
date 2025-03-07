import { useMemo } from 'react';

import { useSong } from '@/context/song';
import { useCatalog } from '@/context/catalog';

import type { Song } from '@/types';

export function useSongState(song: Song) {
	const { songStates, toggleExpanded, toggleEditing, resetSongState } =
		useSong();
	const { toggleSongInCatalog } = useCatalog();

	const state = songStates[song.name] || {
		isExpanded: false,
		isEditing: false,
	};

	const handlers = useMemo(
		() => ({
			toggleExpanded: () => toggleExpanded(song.name),
			toggleEditing: () => toggleEditing(song.name),
			toggleActive: () => {
				toggleSongInCatalog(song.name);
				if (!song.isActive) {
					resetSongState(song.name);
				}
			},
		}),
		[
			song.name,
			song.isActive,
			toggleExpanded,
			toggleEditing,
			toggleSongInCatalog,
		],
	);

	return {
		...state,
		handlers,
	};
}
