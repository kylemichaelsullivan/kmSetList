import type { RefObject } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThumbTack } from '@fortawesome/free-solid-svg-icons';

type AddSongButtonProps = {
	isAdding: boolean;
	toggleIsAdding: () => void;
	handleAddSong: () => void;
	addSongSongRef: RefObject<HTMLInputElement>;
};

function AddSongButton({
	isAdding,
	toggleIsAdding,
	handleAddSong,
	addSongSongRef,
}: AddSongButtonProps) {
	const handleClick = async () => {
		if (isAdding) {
			toggleIsAdding();
			return;
		}
		handleAddSong();

		// ensure ref/input exist after React updates the DOM
		await new Promise((resolve) => setTimeout(resolve, 1));
		if (addSongSongRef.current) {
			addSongSongRef.current.focus();
		}
	};

	return (
		<div className='AddSongButton flex gap-2 items-center'>
			<span className='tracking-wide'>{isAdding ? 'Add' : 'New'}</span>
			<button
				type='button'
				className='AddSongButton text-xxxl flex w-8 h-8 items-center justify-center rounded-full border border-current font-bold ring-blue-500 transition-colors duration-300 hover:bg-black hover:text-white hover:ring'
				title='Add Song to Catalog'
				onClick={handleClick}
			>
				<FontAwesomeIcon
					icon={!isAdding ? faPlus : faThumbTack}
					className={isAdding ? 'rotate-180' : ''}
				/>
			</button>
			<span>Song</span>
		</div>
	);
}

export default AddSongButton;
