import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThumbTack } from '@fortawesome/free-solid-svg-icons';

type AddSongButtonProps = {
	isAdding: boolean;
	handleAddSong: () => void;
};

function AddSongButton({ isAdding, handleAddSong }: AddSongButtonProps) {
	return (
		<button
			type='button'
			className='AddSongButton text-xxxl flex w-8 h-8 items-center justify-center rounded-full border border-current font-bold ring-blue-500 transition-colors duration-300 hover:bg-black hover:text-white hover:ring'
			title='Add Song to Catalog'
			onClick={handleAddSong}
		>
			<FontAwesomeIcon
				icon={!isAdding ? faPlus : faThumbTack}
				className={isAdding ? 'rotate-180' : ''}
			/>
		</button>
	);
}

export default AddSongButton;
