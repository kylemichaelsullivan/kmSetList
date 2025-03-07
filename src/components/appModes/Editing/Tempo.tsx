import { memo, useCallback, type ChangeEvent } from 'react';

import { BPM } from '@/lookups';

interface TempoProps {
	bpm: number;
	songName: string;
	onChange: (bpm: number) => void;
}

const isValidBpm = (bpm: number): boolean => {
	return !isNaN(bpm) && bpm >= BPM.min && bpm <= BPM.max;
};

const Tempo = memo(function Tempo({ bpm, songName, onChange }: TempoProps) {
	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const value = parseInt(e.target.value, 10);
			if (isValidBpm(value)) {
				onChange(value);
			}
		},
		[onChange],
	);

	return (
		<input
			type='number'
			value={bpm}
			onChange={handleChange}
			className='Tempo flex-1 rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
			min={BPM.min}
			max={BPM.max}
			aria-label={`Tempo for ${songName}`}
			aria-invalid={!isValidBpm(bpm)}
		/>
	);
});

export default Tempo;
