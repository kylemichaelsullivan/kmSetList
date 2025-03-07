import { memo, useCallback, type ChangeEvent } from 'react';

import type { SongKey as TSongKey } from '@/types';

const validSongKeys: TSongKey[] = [
	'',
	'C',
	'C#',
	'Db',
	'D',
	'D#',
	'Eb',
	'E',
	'F',
	'F#',
	'Gb',
	'G',
	'G#',
	'Ab',
	'A',
	'A#',
	'Bb',
	'B',
	'Cm',
	'C#m',
	'Dbm',
	'Dm',
	'D#m',
	'Ebm',
	'Em',
	'Fm',
	'F#m',
	'Gbm',
	'Gm',
	'G#m',
	'Abm',
	'Am',
	'A#m',
	'Bbm',
	'Bm',
];

interface SongKeyProps {
	note: TSongKey;
	songName: string;
	onChange: (songKey: TSongKey) => void;
}

const isValidSongKey = (songKey: string): songKey is TSongKey => {
	return validSongKeys.includes(songKey as TSongKey);
};

const SongKey = memo(function SongKey({
	note,
	songName,
	onChange,
}: SongKeyProps) {
	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			if (isValidSongKey(value)) {
				onChange(value);
			}
		},
		[onChange],
	);

	return (
		<input
			type='text'
			value={note}
			onChange={handleChange}
			className='Key flex-1 rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
			placeholder='Key'
			aria-label={`Key for ${songName}`}
			aria-invalid={!isValidSongKey(note)}
			list='valid-keys'
		/>
	);
});

export default SongKey;
