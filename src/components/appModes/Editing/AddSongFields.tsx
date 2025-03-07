import { useState, type RefObject } from 'react';

import { BPM } from '@/lookups';

type AddSongFieldsProps = {
	isAdding: boolean;
	addSongSongRef: RefObject<HTMLInputElement>;
};

function AddSongFields({ isAdding, addSongSongRef }: AddSongFieldsProps) {
	const [songName, setSongName] = useState('');

	return (
		<div
			className={`AddSongFields ${isAdding ? 'flex' : 'hidden'} flex-col gap-2 w-full group`}
		>
			<input
				type='text'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				value={songName}
				onChange={(e) => setSongName(e.target.value)}
				placeholder='Song'
				ref={addSongSongRef}
			/>

			<input
				type='text'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				placeholder='Key'
			/>

			<input
				type='number'
				className='border border-current text-black w-full px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				placeholder='Tempo'
				// onChange={handleChange}
				// className='Tempo flex-1 rounded-md border border-current px-4 py-2 shadow-lg ring-blue-500 group-hover:ring'
				min={BPM.min}
				max={BPM.max}
				// aria-label={`Tempo for ${songName}`}
				// aria-invalid={!isValidBpm(bpm)}
			/>
		</div>
	);
}

export default AddSongFields;
