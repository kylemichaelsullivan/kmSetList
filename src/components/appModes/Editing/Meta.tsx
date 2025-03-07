import { memo, useCallback } from 'react';

import type { Song, SongKey as TSongKey } from '@/types';

import SongKey from './SongKey';
import Tempo from './Tempo';

interface MetaProps {
	song: Song;
	isExpanded: boolean;
	onUpdate: (updates: Partial<Song>) => void;
}

const Meta = memo(({ song, isExpanded, onUpdate }: MetaProps) => {
	const handleSongKeyChange = useCallback(
		(songKey: TSongKey) => {
			onUpdate({ songKey });
		},
		[onUpdate],
	);

	const handleTempoChange = useCallback(
		(bpm: number) => {
			onUpdate({ bpm });
		},
		[onUpdate],
	);

	return (
		<div
			className={`Meta ${song.isActive && isExpanded ? 'flex' : 'hidden'} gap-2 w-full`}
		>
			<SongKey
				note={song.songKey}
				songName={song.name}
				onChange={handleSongKeyChange}
			/>

			<Tempo bpm={song.bpm} songName={song.name} onChange={handleTempoChange} />
		</div>
	);
});

export default Meta;
