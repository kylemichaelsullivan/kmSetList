import { useSetlist } from '@/context/setlist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

type AddSongButtonProps = {
	focusOnSelect: () => void;
};

function AddSongButton({ focusOnSelect }: AddSongButtonProps) {
	const { selectSong, addSongToSetlist } = useSetlist();

	function handleClick() {
		selectSong ? addSongToSetlist() : focusOnSelect();
	}

	return (
		<button
			type='button'
			className={`AddSongButton flex items-center justify-center rounded-full border border-current ring-blue-500 ${selectSong ? 'text-black' : 'text-gray-400'} w-8 h-8 font-bold transition-colors duration-300 ${selectSong ? 'hover:bg-black hover:text-white hover:ring' : 'hover:rotate-90'}`}
			title={selectSong ? `Add ${selectSong} to Setlist` : 'Pick a Song First'}
			onClick={handleClick}
		>
			<FontAwesomeIcon icon={faThumbtack} />
		</button>
	);
}

export default AddSongButton;
